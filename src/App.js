
import Layout from "./Component/Layout/Layout"
import ResponsiveAppBar from "./Global/Navbar/Navbar";
import Home from './Module/Home/Home';
import Slider from "./Module/Home/Swiper";
import Template from "./Template/Template";

function App() {
  return (
    <div className="App">
   <ResponsiveAppBar />
   <Home/>
   {/* <Slider /> */}
    </div>
  );
}

export default App;
