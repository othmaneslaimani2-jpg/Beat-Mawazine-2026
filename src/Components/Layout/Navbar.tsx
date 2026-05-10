import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();
  const handleGoToHome = () => navigate("/");
return (
<header className="flex flex-col md:flex-row items-center justify-between gap-4">

<img onClick={handleGoToHome} className="cursor-pointer w-32 md:w-40" src="\src\assets\Logo.png" alt="Logo Mawazine Beat"/>
<div className="z-40 cursor-pointer">
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white font-medium text-sm md:text-base">
        <Link to="/" className="hover:text-[#ff1111]">Home</Link>
        <Link to="/Program" className="hover:text-[#ff1111]">Program</Link>
        <Link to="/Schedule" className="hover:text-[#ff1111]">Schedule</Link>
        <Link to="/Passport" className="hover:text-[#ff1111]">Passport</Link>
        <Link to="/Favorite" className="hover:text-[#ff1111]">Favorite</Link>
    </div>
</div>
</header>


)
};