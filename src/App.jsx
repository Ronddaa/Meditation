import About from "./components/About/About"
import BtwBuy from "./components/BetweenS/Buy/BtwBuy"
import KeySections from "./components/BetweenS/Key/Key"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Program from "./components/Program/Program"
import Proposal from "./components/Proposal/Proposal"
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
    </>
)

}
