'use client'

import { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { storage, db } from '@/app/lib/firebase'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

type FirebaseImage = {
  id: string
  url: string
  name: string
  storagePath: string
}

export default function ImageUploader() {
  const [images, setImages] = useState<FirebaseImage[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db, 'images'))
      const imgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<FirebaseImage, 'id'>),
      }))
      setImages(imgs)
    }
    fetchImages()
  }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const id = uuidv4()
      const path = `uploads/${id}-${file.name}`
      const storageRef = ref(storage, path)

      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)

      const docRef = await addDoc(collection(db, 'images'), {
        url,
        name: file.name,
        storagePath: path,
      })

      setImages((prev) => [...prev, { id: docRef.id, url, name: file.name, storagePath: path }])
    }
  }

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const newSet = new Set(prev)
      newSet.has(id) ? newSet.delete(id) : newSet.add(id)
      return newSet
    })
  }

  const handleDelete = async () => {
    const newImages = [...images]
    for (const id of selected) {
      const img = newImages.find((img) => img.id === id)
      if (!img) continue

      await deleteObject(ref(storage, img.storagePath))
      await deleteDoc(doc(db, 'images', id))
    }
    setImages((prev) => prev.filter((img) => !selected.has(img.id)))
    setSelected(new Set())
  }

  return (
    <div className="flex flex-col items-center w-full">
      <input type="file" accept="image/*" multiple onChange={handleUpload} className="my-4" />
      {selected.size > 0 && (
        <button onClick={handleDelete} className="mb-4 px-4 py-2 bg-red-600 text-white rounded">
          Radera markerade
        </button>
      )}
      <div className="flex flex-col overflow-y-scroll h-[60vh] w-[60vw] snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {images.map((img) => (
          <section
            key={img.id}
            className="relative h-[80vh] w-full snap-start flex-shrink-0 cursor-pointer"
            onClick={() => toggleSelect(img.id)}
          >
            <Image
              src={img.url}
              alt={img.name}
              fill
              className={`object-cover rounded-lg transition duration-300 ${
                selected.has(img.id) ? 'ring-4 ring-blue-500' : ''
              }`}
            />
          </section>
        ))}
      </div>
    </div>
  )
}
