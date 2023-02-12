const Portfolio = () => {
    return (
      <section id="portfolio" class="pt-36 pb-16 bg-sky-100 ">
        <div class="container">
          <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
              <h4 class="font-semibold text-lg text-primary2 mb-2 lg:text-2xl md:text-xl">Portfolio</h4>
              <h2 class="mb-4 text-primary font-bold text-dark text-2xl md:text-3xl lg:text-4xl ">Project Terbaru</h2>
              <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis eius inventore voluptas nemo laudantium in alias distinctio explicabo nam.</p>
            </div>
          </div>
          <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div class="mb-12 p-4 md:w-1/2">
              <div class="rounded-md shadow-md overflow-hidden ">
                <img src="img\portfolio\maulid 2.webp" alt="maulid alakhyar" />
              </div>
              <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Ilham Ramadhan</h3>
              <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nisi eius repellat!</p>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
              <div class="rounded-md shadow-md overflow-hidden">
                <img class="aspect-video" src="img\portfolio\baliho(4x5).webp" alt="baliho al-ikhlas" />
              </div>
              <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Ilham Ramadhan</h3>
              <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nisi eius repellat!</p>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
              <div class="rounded-md shadow-md overflow-hidden">
                <img src="img\portfolio\sekenario panggung.webp" alt="sekenario panggung" />
              </div>
              <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Ilham Ramadhan</h3>
              <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nisi eius repellat!</p>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
              <div class="rounded-md shadow-md overflow-hidden">
                <video controls class="w-full" alt="3d panggung">
                  <source src="img\portfolio\panggung.webm" type="video/webm" />
                  Browsermu tidak mendukung tag ini, upgrade donk!
                </video>
              </div>
              <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Ilham Ramadhan</h3>
              <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nisi eius repellat!</p>
            </div>
          </div>
        </div>
      </section>
    );
} 
export default Portfolio;