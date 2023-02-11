const Contact = () => {
    return (
        <section id="contact" class="pt-36 pb-32">
        <div class="container"> 
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary2 mb-2 lg:text-2xl md:text-xl">Contact</h4>
                    <h2 class="mb-4 font-bold text-primary text-2xl md:text-3xl lg:text-4xl ">Hubungi Kami</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis eius inventore voluptas nemo laudantium in alias distinctio explicabo nam.</p>
                </div>
            </div>
            <form action="">
                <div class="w-full lg:w-2/3 lg:mx-auto">
                <div class="w-full px-4 mb-8">
                    <label for="name" class="text-base text-primary font-bold">Nama</label>
                    <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary"/>
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="email" class="text-base text-primary font-bold">Email</label>
                    <input type="email" id="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary"/>
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="pesan" class="text-base text-primary font-bold">Pesan</label>
                    <textarea type="text" id="pesan" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary h-32"></textarea>
                </div>
                <div class="w-full">
                    <button class="text-base font-semibold text-white bg-primary2 py-3 w-full px-8 rounded-full hover:bg-gradient-to-r  hover:from-primary  hover:to-primary2 hover:shadow-lg transition duration-500 ease-in-out">Kirim</button>
                </div>
            </div>
            </form>
        </div>
    </section>
    );
}

export default Contact;