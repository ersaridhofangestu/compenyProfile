import { Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import Navbar from "./components/Navbar";
import Pricing from "./routers/Pricing";
import Faq from "./routers/Faq";
import Footer from "./components/Footer";
import Contacts from "./routers/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
