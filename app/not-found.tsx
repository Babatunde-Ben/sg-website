import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";

export default function NotFound() {
  return (
    <div className="bg-primary-500 flex flex-col items-center justify-center pt-32 px-6 min-h-[calc(100vh-4rem)]">
      <div className="text-center max-w-2xl mx-auto border border-tertiary-800 p-12 md:p-20 bg-[#1A0E08]/50 shadow-2xl">
        <h1 className="text-8xl md:text-9xl font-bold font-albert text-white opacity-20 mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Oops! Page not found.
        </h2>
        <p className="text-tertiary-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          It looks like the page you are looking for has been moved, deleted, or
          simply doesn't exist.
        </p>
        <Link href={ROUTES.HOME}>
          <Button className="rounded-full bg-tertiary-50 text-primary-500 hover:bg-white font-medium px-8 py-6 text-lg">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
