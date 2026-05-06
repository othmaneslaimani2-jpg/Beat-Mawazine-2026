import { ConcertCard } from "./Components/Home/concertCard";
import { Header } from "./Components/Layout/Navbar";
import LightRays from "./LightRays";

function App() {
  return (
    <>
      <main>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
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
          <div className="z-40 pl-40 pr-40 pt-5">
          <Header />
          <ConcertCard />
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
