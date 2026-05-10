import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./Components/Layout/Navbar";
import { Home } from "./Components/Home/home";
import { Program } from "./Components/pages/Program";
import { Schedule } from "./Components/pages/Schedule";
import { Passport } from "./Components/pages/Passport";
import { Favorite } from "./Components/pages/Favorite";
import DetailsArtist from "./Components/pages/ArtistDetails";
import LightRays from "./LightRays";

function App() {
  return (
    <>
      <main>
        <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
          <div className="fixed top-0 left-0 w-screen h-screen -z-30 bg-[#1a1a1a] ">
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
          <div className="z-40 px-4 md:px-20 lg:px-40 pt-5">
            <Navbar />
          </div>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Program" element={<Program/>}></Route>
          <Route path="/Schedule" element={<Schedule/>}></Route>
          <Route path="/Passport" element={<Passport/>}></Route>
          <Route path="/Favorite" element={<Favorite />}></Route>
          <Route path="/artist/:id" element={<DetailsArtist />}></Route>
          </Routes>
</BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
