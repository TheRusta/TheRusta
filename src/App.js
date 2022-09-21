
// import Withsubnavigation from "./rusta"
import Carousel from "./imagehead"
import WithSpeechBubbles from "./blogs"
// import Contact from './contact'
// import Navbar from './navbar';
import CallToActionWithVideo from "./infopage"
import Whatsapp1 from "./whatsapp"
import BlogCards from './bolcked';
// import Product from "./gallery";
import BrandStats from "./anime";
import CallToAction from './rasta';

export const App = () => {
  return (
    <>

      <div><Carousel></Carousel></div>
      <div><CallToActionWithVideo></CallToActionWithVideo></div>
      <div> <Whatsapp1></Whatsapp1></div>
      <div><CallToAction></CallToAction></div>
      <div><BrandStats></BrandStats></div>
      <div><WithSpeechBubbles></WithSpeechBubbles></div>
      <div><BlogCards></BlogCards></div>
      <div></div>
    </>
  );
}



