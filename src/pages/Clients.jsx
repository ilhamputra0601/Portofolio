const Clients = () => {
    return ( 
        <section id="clients" class="pt-36 pb-16 bg-slate-800">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary2 mb-2 lg:text-2xl md:text-xl">Clients</h4>
                    <h2 class="mb-4 font-bold text-primary text-2xl md:text-3xl lg:text-4xl ">Yang Pernah bekerjasama</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum non at ut!</p>
                </div>
            </div>
            <div class="w-full px-4">
                <div class="flex flex-wrap item-center justify-center">
                    <a target="_blank" href="https://www.google.com/" class="w-20 lg:w-24 xl:w-28  mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                        <img src="public\img\clients\google_ji7zl3swefrp.svg" alt="google"/>
                    </a>
                    <a target="_blank"  href="https://laravel.com/" class="w-20 lg:w-24 xl:w-28  mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                        <img src="public\img\clients\laravel-2.svg" alt="laravel"/>
                    </a>
                    <a target="_blank"  href="https://tailwindcss.com/" class="w-20 lg:w-24 xl:w-28  mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                        <img src="public\img\clients\tailwindcss.svg" alt="tailwindcss"/>
                    </a>
                    <a target="_blank"  href="https://jquery.com/" class="w-20 lg:w-24 xl:w-28  mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                        <img src="public\img\clients\jquery-4.svg" alt="jquery"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Clients;