
import Footer from "./Global/Footer/Footer";
import ResponsiveAppBar from "./Global/Navbar/Navbar";
import Home from './Module/Home/Home';
import {Route, Routes} from "react-router-dom"
import LayOut from "./Global/Outlet/LayOut";
import Cab from "./Module/Cab/Cab";
import Contactus from "./Global/Contactus/Contactus";

function App() {
  return (
    <div className="App">
    {/* <Logo /> */}
    <Contactus/>
   <ResponsiveAppBar />
   <Routes>
    <Route path="/" element={<LayOut/>}>
      <Route index element={<Home/>} />
      <Route path="Cab" element={<Cab/>} />
    </Route>
   </Routes>
   <Footer />
    </div>
  );
}

export default App;
