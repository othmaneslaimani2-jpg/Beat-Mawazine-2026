import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();
  const handleGoToHome = () => navigate("/");
return (
<header className="flex items-center justify-between ">

<img onClick={handleGoToHome}  className="flex cursor-pointer size-10/100" src="\src\assets\Logo.png" alt="Logo Mawazine Beat"/>
<div className=" z-40 cursor-pointer">
    <div className="flex gap-6 text-white font-medium">
        <Link to="/" className="hover:text-[#ff1111]">Home</Link>
        <Link to="/program" className="hover:text-[#ff1111]">Program</Link>
        <Link to="/schedule" className="hover:text-[#ff1111]">Schedule</Link>
        <Link to="/passport" className="hover:text-[#ff1111]">Passport</Link>
    </div>
</div>
</header>


)
};