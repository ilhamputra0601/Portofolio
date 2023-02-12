const Hero = () =>{
    return(
        <> 
    <section id="home" class="pt-36">
        <div class="container ">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2">
                    <h1 class="text-base font-semibold text-primary2 md:text-xl lg:text-2xl ">Halo Semua 👋, saya <span class="block font-bold text-primary text-4xl md:text-5xl lg:text-7xl font-primary tracking-wider">Ilham Ramadhan</span></h1>
                    <h2 class=" text-other font-other font-medium text-lg mb-5 md:text-2xl lg:text-3xl">Programer   <span class="text-slate-900 dark:text-white">& </span> <span class="text-primary2 font-semibold">Designer</span> </h2>
                    <p class=" font-medium text-slate-500 mb-10 text-sm md:text-lg xl:text-xl dark:text-slate-300"> Menjadi Programer sangat mudah bukan. <span class="text-other font-semibold">bukan!</span> </p>
                    <a href="#contact" class="bg-primary text-white inline-block py-2 px-5 rounded-full text-sm tracking-wider hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out md:scale-105 lg:scale-110 hover:text-white hover:bg-gradient-to-r  hover:from-primary  hover:to-primary2">Hubungi Saya</a>
                </div>
                <div class="w-full self-end px-4 lg:w-1/2">
                    <div class="mt-10 relative lg:mt-9 lg:right-0 ">
                        <img src="public\img\hamz.png" alt="hamz" class="max-w-full mx-auto "/>
                        <span class="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 scale-105 md:scale-125 lg:scale-150"><svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ec4899" d="M39,-39C52.9,-25.1,68.1,-12.5,71.9,3.8C75.7,20.1,68,40.2,54.1,48.6C40.2,57,20.1,53.7,-1.4,55.1C-22.8,56.5,-45.7,62.5,-62.1,54.1C-78.5,45.7,-88.6,22.8,-87.4,1.2C-86.2,-20.5,-73.9,-41,-57.5,-55C-41,-68.9,-20.5,-76.3,-4,-72.3C12.5,-68.3,25.1,-53,39,-39Z" transform="translate(100 100)" />
                        </svg></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Hero