import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Price from "./sections/Price";
import Testimony from "./sections/Testimony";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center  bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Price />
      <About />
      <Testimony/>
      
    </div>
  );
}
