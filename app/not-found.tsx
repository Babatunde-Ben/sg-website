import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import Image from "next/image";
import NotFoundImage from "@/app/_assets/images/404.png";

export default function NotFound() {
  return (
    <div className="section-padding-x pt-40 pb-20 text-center min-h-[calc(100vh-4rem)]">
      <Image
        src={NotFoundImage}
        alt="404 not found"
        className="w-2xl mx-auto"
        priority
      />
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary-600 mb-6 md:mb-8 lg:text-6xl">
        Oops! page not found
      </h2>
      <p className="text-tertiary-700 mb-40 md:text-lg lg:text-xl lg:mb-12">
        We can’t seem to find what you’re looking for. Let’s get you back on
        track.
      </p>
      <Link href={ROUTES.HOME}>
        <Button variant={"outline"} className="w-full max-w-xs">
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}
