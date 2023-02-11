const Social = (props) => {
    console.log(props.dataSocial);
    return ( 
        props.dataSocial.map((social)=>{
            return <a class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-secondary dark:text-slate-300 dark:border-slate-300 hover:text-white hover:bg-gradient-to-r  hover:from-primary  hover:via-other  hover:to-primary2 transition duration-500 ease-in-out" target="_blank" href={social.href}>
            <svg class="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{social.title}</title>
            <path d={social.d}/>
            </svg></a>
        })
    );
} 
export default Social;