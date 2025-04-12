import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "../axios";

const Hero = ()=>{
    const [quoteOfDay, setQuoteOfDay] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect(()=>{
    //     fetchQuotesToday();
    // },[]);

    const fetchQuotesToday = async ()=>{
        try {
            const res = await fetch ('https://api.allorigins.win/get?url=https://zenquotes.io/api/today');
            const data = await res.json();
            console.log(data)
            setQuoteOfDay(data.contents);
        }catch(error){
          console.error("Error fetching quotes:", error);
          setErrorMessage(error)
        }finally{
            setLoading(false)
        }
    }



    // const fetchQuotes = async () => {
    //     try {
    //       const response = await axios.get('/today');
    //       setQuoteOfDay(response.data.contents);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error("Error fetching quotes:", error);
    //       setErrorMessage(error);
    //     }finally{
    //         setLoading(false);
    //     }
    //   };
      
    return(
        <section className="max-container padding-x  grid grid-cols-1 place-items-center pt-10">
        
                <p className="text-3xl font-montserrat py-5 text-center max-w-[255px] ">Quote of the day</p>
                {loading ? 
                <Spinner/> : 
                <div className=" max-w-[600px] place-items-center">
                        {errorMessage ? 
                        <p>{errorMessage}</p> : 
                        <div className=" max-w-[600px] place-items-center">
                            <h1 className="text-center text-3xl font-reenie sm:text-6xl">"Nothing we see or hear is perfect. But right there in the imperfection is perfect reality."</h1>
                            <p className="text-subtext py-5 text-lg ">Shunryu Suzuki</p>    
                        </div>}
                </div>}
        </section>
    );
}

export default Hero;