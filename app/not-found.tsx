import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import Image from "next/image";
import NotFound404 from "@/app/_assets/images/404.png";
import NotFoundBook from "@/app/_assets/images/not-found-book.png";

export default function NotFound() {
  return (
    <>
      <section className="section-padding-x pt-40 mb-20 lg:mb-40 text-center min-h-[calc(100vh-4rem)]">
        <Image placeholder="blur"
          src={NotFoundBook}
          alt="404 not found"
          className="absolute -bottom-10 right-0 hidden xl:block"
        />
        <Image placeholder="blur"
          src={NotFound404}
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
            Go to Homepage
          </Button>
        </Link>
      </section>
    </>
  );
}
