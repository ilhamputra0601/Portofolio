import Social from "../components/button/social";
import social from "../json/social.json";
const About = () => {
    return ( 
        <>
        <section id="about" class="pt-36 pb-32">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-10 lg:w-1/2">
                    <h4 class="font-bold uppercase text-primary text-lg font-other mb-3">Tentang Saya </h4>
                    <h2 class="font-bold text- text-2xl mb-5 max-w-md  lg:text-3xl dark:text-white">Yuk, belajar pemograman bersama <span class="text-transparent bg-clip-text bg-gradient-to-r from-other/60 via-other/80 dark:from-other/80 dark:via-other/90 dark:to-other to-other selection:text-other ">Ilham Ramadhan</span> </h2>
                    <p class="font-medium text-base lg:text-lg text-secondary max-w-lg dark:text-slate-300
                    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat perspiciatis, obcaecati quae fuga earum possimus, cum odit laboriosam sunt libero atque? Expedita dolore provident eius, magni at dicta illo.</p>
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <h3 class="font-semibold text-2xl lg:text-3xl mb-4 lg:pt-10 dark:text-white">Mari Berteman</h3>
                    <p class="font-medium text-base lg:text-lg text-secondary max-w-lg mb-6 dark:text-slate-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus dolor incidunt dolores temporibus vitae libero quas quae ab consequatur aliquam placeat magnam odio nam, sunt officia rerum fuga saepe.</p>
                    <div class="flex item-center">
                        <Social dataSocial={social}/>  
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
} 
export default About;