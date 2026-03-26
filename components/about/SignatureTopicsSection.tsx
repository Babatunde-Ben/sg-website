import Image from "next/image";

import CommunicationImage from "@/app/_assets/images/portrait-8.jpg";
import IdentityImage from "@/app/_assets/images/portrait-9.jpg";
import LeadershipImage from "@/app/_assets/images/portrait-10.jpg";

export default function SignatureTopicsSection() {
  const signatureTopicsItems = [
    { image: CommunicationImage, title: "Communication & Relationships" },
    { image: IdentityImage, title: "Identity & Purpose" },
    { image: LeadershipImage, title: "Leadership & Influence" },
  ];
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center text-tertiary-50 mb-4 md:mb-6 lg:mb-8">
        Signature topics
      </h2>
      <p className="text-tertiary-600 text-center mb-14 sm:text-lg sm:mb-16 md:mb-18 lg:mb-20 lg:text-xl">
        Every session is customized for the context, but I am often invited to
        speak on:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-4">
        {signatureTopicsItems.map((item, index) => (
          <div key={index}>
            <div className="relative aspect-square w-full min-h-80 mb-2 overflow-hidden">
              <Image
                src={item.image}
                alt="Communication & Relationships"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white/4 h-21 flex items-center justify-center md:h-24 lg:h-28">
              <p className="px-2 py-1 bg-white/6 text-white font-medium rounded-lg text-lg xl:text-xl">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
