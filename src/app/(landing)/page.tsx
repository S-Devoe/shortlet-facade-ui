import BestHomesSection from "./home/best.component";
import CitiesHomeComponent from "./home/cities.component";
import HassleHomeComponent from "./home/hassle.component";
import HomeHeroSection from "./home/hero.component";
import ShortletHomeComponent from "./home/shortlet.component";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <ShortletHomeComponent />
      <HassleHomeComponent />
      <CitiesHomeComponent />
      <BestHomesSection />
    </>
  );
}
