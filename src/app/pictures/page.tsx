'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import { useState } from 'react'

const Picture = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
    setUploadedImages((prev) => [...prev, ...newImages])
  }

  const router = useRouter()

  const goToPictures = () => {
    router.push('/pictures')
  }

  const allImages = [
    { src: '/assets/spanien.jpg', alt: 'spanien resa' },
    { src: '/assets/visby.jpg', alt: 'visby resa' },
    { src: '/assets/midsommar.jpg', alt: 'midsommar resa' },
    { src: '/assets/barn.jpg', alt: 'barn resa' },
    ...uploadedImages.map((src, index) => ({
      src,
      alt: `uppladdad bild ${index + 1}`,
    })),
  ]

  return (
    <main>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center">
        {/* Upload-knapp */}
        <div className="my-4">
          <label className="block mb-2 font-semibold text-gray-700">Ladda upp bilder</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="block text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
        </div>

        {/* Scrollbart bildområde */}
        <div className="overflow-y-scroll h-[60vh] w-[60vw] snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-500">
          {allImages.map((img, index) => (
            <section key={index} className="snap-start h-[60vh] w-full relative flex-shrink-0">
              <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
            </section>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  )
}

export default Picture

// 'use client'

// import Navbar from '@/components/navbar/page'
// import ImageUploader from './imageUpploader'
// import Footer from '@/components/footer/page'

// const Picture = () => {
//   return (
//     <main>
//       <Navbar />
//       <ImageUploader />
//       <Footer />
//     </main>
//   )
// }

// export default Picture
