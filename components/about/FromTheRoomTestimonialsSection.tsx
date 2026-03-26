import Profile1 from "@/app/_assets/images/profile-1.png";
import Profile2 from "@/app/_assets/images/profile-2.png";
import FeedbackCard from "@/app/_components/shared/FeedbackCard";

const testimonials = [
  {
    quote: "Love your style Stephanie George, you lead with power and spark.",
    author: "Pastor T.",
    location: "Lagos",
    image: Profile1,
  },
  {
    quote:
      "In a functioning state, she’ll be my top pick for a Ministerial position. Won’t be surprised if this manifested someday soon.",
    author: "Mensah, Hr Lead",
    location: "Lagos",
    image: Profile2,
  },
  {
    quote:
      "You carried that room with confidence, clarity, and presence. So proud of how you showed up and elevated the entire experience.",
    author: "Maureen O., Hr Lead",
    location: "Lagos",
    image: Profile2,
  },
];

export default function FromTheRoomTestimonialsSection() {
  return (
    <section className="section-padding-x my-20 md:my-24 lg:my-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center text-tertiary-50 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        From the Room
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={index}
            author={testimonial.author}
            location={testimonial.location}
            image={testimonial.image}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
}
