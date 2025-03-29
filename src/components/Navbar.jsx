

function Navbar() {

    return (

        <>

            <div className="navbar bg-[#2C3E50] shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden text-[#F5F7FA] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#34495E] rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Item 1</a></li>
                            <li>
                                <a className="text-[#F5F7FA] hover:text-[#3498DB]">Parent</a>
                                <ul className="p-2">
                                    <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Submenu 1</a></li>
                                    <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Item 3</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-semibold text-[#F5F7FA]">MyBrand</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Home</a></li>
                        <li>
                            <details>
                                <summary className="text-[#F5F7FA] hover:text-[#3498DB]">Services</summary>
                                <ul className="p-2 bg-[#34495E] rounded-md shadow-md">
                                    <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Web Design</a></li>
                                    <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">SEO</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className="text-[#F5F7FA] hover:text-[#3498DB]">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-[#F5F7FA] hover:text-[#3498DB] cursor-pointer">Login</a>
                </div>
            </div>
        </>

    )



}


export default Navbar
