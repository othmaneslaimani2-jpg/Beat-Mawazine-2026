import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./Components/Layout/Navbar";
import { Home } from "./Components/Home/home";
import { Program } from "./Components/pages/Program";
import { Schedule } from "./Components/pages/Schedule";
import LightRays from "./LightRays";

function App() {
  return (
    <>
      <main>
        <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
          <div className=" absolute top-0 left-0 w-screen h-screen -z-30 bg-[#1a1a1a] ">
            <LightRays
              raysOrigin="top-center"
              raysColor="#dc1e1e"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>
          <BrowserRouter>
          <div className="z-40 pl-40 pr-40 pt-5">
            <Navbar />
          </div>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Program" element={<Program/>}></Route>
          <Route path="/Schedule" element={<Schedule/>}></Route>
          </Routes>
</BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
