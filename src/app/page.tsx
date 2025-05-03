
import Cards from "../Components/Homepage/Cards";
import Hero from "../Components/Homepage/Hero";
import { StickyScrollRevealDemo } from "../Components/Homepage/Hero2";

import Newsletter from "../Components/Homepage/Newsletter";




export default function Home() {
  return (
  <> 
    <Hero></Hero>
    <StickyScrollRevealDemo></StickyScrollRevealDemo>
    <Cards></Cards>
    <Newsletter></Newsletter>
    </>
  );
}
