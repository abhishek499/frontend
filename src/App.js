import Footer from "./Global/Footer/Footer";
import ResponsiveAppBar from "./Global/Navbar/Navbar";
import Home from "./Module/Home/Home";
import { Route, Routes } from "react-router-dom";
import LayOut from "./Global/Outlet/LayOut";
import Cab from "./Module/Cab/Cab";
import Contactus from "./Global/Contactus/Contactus";
import PindDan from "./Module/PindDan/PindDan";
import Navbar2 from "./Global/Navbar/Navbar2";
import AOS from "aos";
import "aos/dist/aos.css";
import Tour from "./Module/Tour/Tour";
import Experiment from "./Module/Experiment";

const data = {
  title: "Varanasi 2N /3D Pind Daan Special",
  image:
    "https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80",
  tourSummary: [
    "Pind Daan or Post Death Rituals Organized by Holy Voyages.",
    "Temple tour to Sankat Mochan , Anna Purna, Kashi Vishwanath, Manas Mandir ,Durga Temples and visit to BHU in Varanasi",
    "Ganga Aarti in Evening at Ghat",
    "Morning boat ride in River Ganges",
  ],
  Itinerary: [
    {
      title: "Day 1 : Varanasi",
      body: "Pickup from Airport/Railway station and check in to Hotel. At evening, get ready to experience one of the most memorable moments of your life, as you will be taken to River Ganges. Enjoy Ganga Aarti . Get a glimpse of the spiritualism at the Ganga Ghats (river front).Night stay at Hotel in Varanasi",
    },
    {
      title: "Day 2 : Varanasi – Pind daan Rituals -Temple Tour",
      body: "In morning we will go for Pind daan rituals. It takes around 3-4 hrs to perform entire activity. Everything will be arranged by us (Purohit + Pooja items) . After that we visit the most religious Kashi Vishwanath temple , Annapurna Temple . Come back to hotel for breakfast Latter in noon have a fabulous city tour which covers the Bharat Mata temple , Manas Mandir , Sankat Mochan (Hanuman temple) ,Durga temple , BHU. In evening have leisure time for shopping in Varanasi. Night stay at Hotel in Varanasi .",
    },
    {
      title: "Day 3 : Varanasi –Drop to Airport/Railway station",
      body: "Early morning, we will be taken for a boat ride on the Ganges at time of sun rise. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. We will visit all the famous Ghats of Varanasi via boat. Come back for breakfast. After Breakfast, have leisure time in morning. Latter drop to airport/Railway station with pleasant memory of holy trip.",
    },
  ],
  Inclusion: {
    inclusion: [
      "A/c vehicle as per plan",
      "All toll tax parking driver night charges State tax.",
      "Pickup and Drop to/from Railway station/Airport",
      "Hotel as per selected above with selected plan (Twin sharing room)",
    ],
    exclusion: [
      "Daan given to Purohit/Pandit",
      "Any Rituals/Pooja Cost ",
      "Any personal expenditure, tip, other food items",
      "Any other boat ride which is not mentioned above",
      "Guide Charge",
      "GST Tax (5%)",
    ],
  },
};

function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div className="App">
      {/* <Logo /> */}
      {/* <Contactus /> */}

      <Routes>
        <Route path="experiment" element={<Experiment />} />

        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="Cab" element={<Cab />} />
          <Route path="pinddan" element={<PindDan data={data} />} />
          <Route path="nav" element={<Navbar2 />} />
          <Route path="tour" element={<Tour data={data} />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
