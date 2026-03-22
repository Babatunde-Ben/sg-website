import Image from "next/image";
import GalleryImage1 from "@/app/_assets/images/portrait-4.jpg";
import GalleryImage2 from "@/app/_assets/images/portrait-1.jpg";
import WithLoveWriting from "@/app/_assets/SVGs/with-love.svg";

export default function GallerySneakPeek() {
  return (
    <section className="py-2 section-padding-x">
      <div className="relative grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <WithLoveWriting className="text-tertiary-500 absolute z-10 -bottom-40 left-1/2 -translate-x-1/2 w-60 md:-bottom-12 md:left-52 md:w-72 lg:w-96 lg:left-1/4" />
        <div className="relative w-full h-[464px] sm:h-[600px] lg:h-[700px]">
          <Image
            src={GalleryImage1}
            alt="Gallery Preview 1"
            fill
            className="object-cover"
          />
          <div className="size-full absolute  bg-linear-to-b from-primary-500/40 from-50% to-primary-500" />
        </div>
        <div className="relative w-full h-[464px] sm:h-[600px] lg:h-[700px]">
          <Image
            src={GalleryImage2}
            alt="Gallery Preview 2"
            fill
            className="object-cover"
          />
          <div className="size-full absolute  bg-linear-to-b from-primary-500/40 from-50% to-primary-500" />
        </div>
      </div>
    </section>
  );
}
