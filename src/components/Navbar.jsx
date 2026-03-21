import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){

const [open,setOpen]=useState(false)

return(
<nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow">

<div className="container mx-auto flex justify-between items-center p-4">

<div className="hidden md:flex gap-6">

<Link to="/">Home</Link>
<Link to="/properties">Properties</Link>
<Link to="/service">Services</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

<ThemeToggle/>

</div>

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>

{open && <MobileMenu/>}

</nav>
)
}