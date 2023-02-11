const Navbar = () =>{
    return(
        <> 
        <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex item-center justify-between relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-lg text-primary block py-6">Hamz</a>
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" type="button" class="block absolute right-4 lg:hidden  ">
                        <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span> 
                        <span class="hamburger-line transition duration-300 ease-in-out"></span> 
                        <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span> 
                    </button>
                    <nav id="nav-menu" class="hidden absolute py-5 bg-white lg:border-transparent  border border-slate-300 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none dark:text-white  dark:bg-slate-900  lg:dark:bg-transparent ">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">Beranda</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">About</a>
                            </li>
                            <li class="group">
                                <a href="#portfolio" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">Portfolio</a>
                            </li>
                            <li class="group">
                                <a href="#clients" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">Clients</a>
                            </li>
                            <li class="group">
                                <a href="#blog" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">Blog</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="text-base text-dark py-2 mx-8 group-hover:text-primary2 flex">Contact</a>
                            </li>
                                <hr class="w-48 h-0.5 lg:w-0.5 lg:h-7 mx-auto lg:ml-1 my-4 lg:my-auto bg-slate-600 border-0 rounded lg:inline-block  lg:dark:bg-white "/>
                            <li class="flex lg:items-center pl-8 mx-auto  ">
                                <div id="dark" class="flex cursor-pointer ml-7 lg:ml-0 lg:mt-1">
                                    <span class="mr-2 text-md text-black dark:text-white">Mode </span>
                                    <span id="terang" class="flex">
                                        <img  src="public\svg\idea.png" alt="#" width="30"/>
                                        <span class="ml-2 text-md text-slate-300 ">light</span>
                                    </span>
                                    <span id="gelap" class="hidden flex">
                                        <img  src="public\svg\night-mode.png" alt="#" width="30"/>
                                        <span class="ml-2 text-md text-slate-700">dark</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </>
    );
}

export default Navbar