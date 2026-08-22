import Baner from "./components/Baner";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import NoticeBar from "./components/NoticeBar";
import Platform from "./components/Platform";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import TopSellers from "./components/TopSellers";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <main className="marketplace-home ">
        <NoticeBar />
        <Baner/>
        <Hero />
        <Services/>
        <Platform/>
        <TopSellers/>
        <Reviews/>
        <CallToAction/>
        <Footer/>
      </main>
    </>
  );
}

export default HomePage;
