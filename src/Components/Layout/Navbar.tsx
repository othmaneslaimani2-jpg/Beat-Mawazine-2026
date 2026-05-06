export const Header = () => {
return (
<header className="flex items-center justify-between">

<img className="flex size-10/100" src="\src\assets\Logo.png" alt="Logo Mawazine Beat"/>
<div className=" z-40">
    <ul className="flex gap-4 text-white hover:text-#80F915">
    <li>Home</li>
<li>Program</li>
    <li>Schedule</li>
    <li>Passport</li>
    </ul>
    </div>
</header>


)
};