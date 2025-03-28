import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-center text-white mt-5 text-5xl">
        Välkommen till vår bröllopssida
      </h1>
      <div className="grid place-items-center mt-10 gap-4 p-2">
        <p className="text-xl text-white justify-center text-center items-center max-w-screen-md">
          Kära familj, vänner och älskade, <br />
          Välkomna till vår bröllopsdag! Vi är otroligt tacksamma och glada över
          att få ha er här med oss för att fira detta speciella ögonblick. Idag
          handlar det inte bara om oss två, det handlar om er alla som har
          stöttat, skrattat, gråtit och delat otaliga minnen med oss längs
          vägen. <br />
          Er närvaro betyder allt för oss. Oavsett om ni har rest långt eller
          kort, vuxit upp med oss eller klivit in i våra liv någonstans på
          vägen, känner vi oss oerhört lyckliga över att ha er i våra liv.
          Tillsammans utgör ni den vackra blandningen av familj, vänner och nära
          & kära som har format oss till dem vi är idag. <br />
          Under de senaste åtta åren har vår relation varit en galen, underbar
          resa, från de vindpinade fälten på Gotland till den salta luften vid
          Västkusten i Göteborg. <br />
          Och här står vi idag, redo att börja nästa kapitel, omgivna av de
          människor vi älskar mest.
          <br />
          <br />
          Tack för att ni är här och för att ni är en del av vår historia.
          <br />
          Nu,
          <br />
          låt oss fira! Med kärlek
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-10 px-4">
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Image
              src="/assets/visby.jpg"
              width={500}
              height={300}
              alt="Spnanien"
              className="rounded-lg w-full h-auto object-cover aspct-video"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Image
              src="/assets/hat.jpg"
              width={300}
              height={300}
              alt="hat"
              className="rounded-lg w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Image
              src="/assets/barn.jpg"
              width={500}
              height={300}
              alt="barn"
              className="rounded-lg w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="flex- flex-col sm:flex-row gap-3 mt-10">
            <Image
              src="/assets/midsommar.jpg"
              width={300}
              height={300}
              alt="midsommar"
              className="rounded-lg w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
