
import Layout from "./Component/Layout/Layout"
import Footer from "./Global/Footer/Footer";
import ResponsiveAppBar from "./Global/Navbar/Navbar";
import Home from './Module/Home/Home';
import Slider from "./Module/Home/Swiper";

function App() {
  return (
    <div className="App">
   <ResponsiveAppBar />
   <Home/>
   <Footer />
   {/* <Slider /> */}
    </div>
  );
}

export default App;
