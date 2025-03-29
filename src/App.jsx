import About from "./components/About/About"
import AfterCurse from "./components/AfterCurse/AfterCurse"
import BtwBuy from "./components/BetweenS/Buy/BtwBuy"
import KeySections from "./components/BetweenS/Key/Key"
import Effects from "./components/Effects/Effect"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Me from "./components/Me/Me"
import Program from "./components/Program/Program"
import Proposal from "./components/Proposal/Proposal"
import Questions from "./components/Questions/Questions"
import Reviews from "./components/Reviews/Reviews"
import WhiteSection from "./components/WhiteSection/WhiteSection"
import Who from "./components/Who/Who"

export default function App() {

  return (
    <>
      <Header />
      <Hero />
      <KeySections />
      <About />
      <Proposal />
      <Program />
      <BtwBuy />
      <Who />
      <Me />
      <AfterCurse />
      <Reviews />
      <WhiteSection />
      <Effects />
      <Questions />
      <Footer />
    </>
)

}
