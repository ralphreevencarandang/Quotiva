

const Hero = ()=>{
    return(
        <section className="max-container padding-x  grid grid-cols-1 place-items-center pt-10">
            <div className=" max-w-[600px] place-items-center">
                <p className="text-3xl font-montserrat py-5 text-center max-w-[255px] ">Quote of the day</p>
                <h1 className="text-center text-3xl font-reenie sm:text-6xl">"He who wishes to be obeyed must know how to command."</h1>
                <p className="text-subtext py-5 text-lg ">Niccolo Machiavelli</p>
            </div>
        </section>
    );
}

export default Hero;