import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBar />
      <FeaturedDishes />
      <Testimonials />
      <CTA title="Your table is waiting" text="Book online in under a minute." href="/reservation" label="Reserve a table" />
    </>
  );
}
