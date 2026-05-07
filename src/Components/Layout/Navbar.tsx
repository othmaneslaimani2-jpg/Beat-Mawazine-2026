export const Header = () => {
return (
<header className="flex items-center justify-between ">

<img className="flex cursor-pointer size-10/100" src="\src\assets\Logo.png" alt="Logo Mawazine Beat"/>
<div className=" z-40 cursor-pointer">
    <ul className="flex gap-6 text-white font-medium">
    <li className="hover:text-[#ff1111]">Home</li>
<li className="hover:text-[#ff1111]">Program</li>
    <li className="hover:text-[#ff1111]">Schedule</li>
    <li className="hover:text-[#ff1111]">Passport</li>
    </ul>
    </div>
</header>


)
};