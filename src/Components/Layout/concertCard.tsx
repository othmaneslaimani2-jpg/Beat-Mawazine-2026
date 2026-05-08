import { useNavigate } from "react-router-dom";
export const ConcertCard = () => {
   const navigate = useNavigate();
  const handleGoToSchedule = () => navigate("/Schedule");
  const handleGoToProgram = () => navigate("/Program");
return (
    <>

    <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-76 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-white text-sm font-medium mb-2  ">
              FESTIVAL MAWAZINE BEAT 2026
            </div>
            <h1 className="font-bold text-6xl md:text-5xl lg:text-6xl leading-tight tracking-tighter text-[#ffffff] dark:text-white">
              Experience The 
              <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-[#ac0808] to-[#d60020]">
                 RHYTHM OF THE WORLD
              </span>
            
            </h1>
            
            <p className="text-lg text-[#FFFFFF] max-w-md mx-auto md:mx-0 ">
              Get ready for the heartbeat of Rabat to pulse louder than ever. Mawazine – Rhythms of the World is back, bringing a global stage to the soul of Morocco. From legendary international icons to the rising stars of the Arab world and Africa, this isn't just a music festival—it’s where cultures collide and unforgettable memories are made.
            </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 py-4">
              <button onClick={handleGoToProgram} className=" cursor-pointer font-bold text-xl rounded-full bg-linear-to-r from-[#ac0808] to-[#d60020] hover:from-[#ff4949] hover:to-[#ff1111] transition-all duration-300 shadow-lg shadow-primary/20 px-6 py-3 text-white z-10">
                View Program
              </button>
              <button onClick={handleGoToSchedule} className="cursor-pointer font-bold text-xl rounded-full bg-linear-to-r from-[#f5f2f2] to-[#e9e6e6] hover:from-[#e4e3e3] hover:to-[#e7e0e0] transition-all duration-300 shadow-lg shadow-primary/20 px-6 py-3 text-[#ff1111] z-10">
                View Schedule
              </button>
</div>
            </div>
            
             <div className="relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse md:hidden"></div>
            <div className="relative bg-linear-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black p-1 rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-xl shadow-primary/5 overflow-hidden w-full max-w-md mx-auto md:max-w-none backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-50"></div>
              <img src="src\assets\concert.png"alt="Concert"className="mx-auto rounded-3xl h-[600px] w-[600px]"/>
              <h2></h2>
            </div>
            
            </div>
     
  </div>           
              
              
</section>
</>

);


}