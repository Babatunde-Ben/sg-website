import Image, { StaticImageData } from "next/image";

interface FeedbackCardProps {
  quote: string;
  author: string;
  location: string;
  image: StaticImageData;
}
export default function FeedbackCard({
  quote,
  author,
  location,
  image,
}: FeedbackCardProps) {
  return (
    <div className="bg-primary-400 px-6 py-14 relative flex flex-col justify-between min-h-[320px]">
      <p className="text-tertiary-700 md:text-lg mb-10 relative z-10 font-light">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="relative size-12 rounded-full overflow-hidden bg-tertiary-200/20">
          <Image src={image} alt={author} fill className="object-cover" />
        </div>
        <p className="text-white">
          <span className=" font-bold text-lg md:text-2xl">{author},</span>
          <span className="md:text-lg ml-2">{location}.</span>
        </p>
      </div>
    </div>
  );
}
