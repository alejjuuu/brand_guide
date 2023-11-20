import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Colors from "../components/Colors";
import Font from "../components/Font";
import Testimonials from "@/brand_guide/components/Testimonials";
import Tabs from "@/brand_guide/components/Tabs";
import Tabs1 from "@/brand_guide/components/Tabs1";
import Tabs2 from "../components/Tabs2";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Colors />
      <Font />
      <Testimonials />
      <Tabs />
      <Tabs2 />

      {/* Your other components and content*/}
    </div>
  );
}
