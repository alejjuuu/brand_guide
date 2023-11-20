import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Colors from "../components/Colors";
import Font from "../components/Font";
import Testimonials from "../components/Testimonials";
import Tabs from "../components/Tabs";
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
