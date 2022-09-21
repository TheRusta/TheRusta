

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import WithSubnavigation from "./rusta";
import Carousel from "./imagehead"
import WithSpeechBubbles from "./blogs"
import Contact from './contact'
import Navbar from './navbar';
import CallToActionWithVideo from "./infopage"
import Whatsapp1 from "./whatsapp"
import BlogCards from './bolcked';
import Product from "./gallery";
import BrandStats from "./anime";
import CallToAction from "./rasta";



const Home = () => {

  return (
    <ChakraProvider >
      <BrowserRouter>
        <Navbar />
        {<Routes>
          <Route path="/" element={<App />} />
          <Route path="/navbar" element={< WithSubnavigation />} />
          <Route path="/anime" element={<BrandStats />} />
          <Route path="/imagehead" element={<Carousel />} />
          <Route path="/bolcked" element={<BlogCards />} />
          <Route path="/gallery" element={<Product />} />
          <Route path="/infopage" element={<CallToActionWithVideo />} />
          {<Route path="/contact" element={<Contact />} />}
          {<Route path="/blogs" element={<WithSpeechBubbles />} />}
          {<Route path="/rasta" element={<CallToAction />} />}
        </Routes>}



      </BrowserRouter>
      <WithSubnavigation />
    </ChakraProvider>

  );
}

export default Home;
