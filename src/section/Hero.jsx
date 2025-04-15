import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "../axios";
import React from "react";

const Hero = ()=>{
    const [quoteOfDay, setQuoteOfDay] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        fetchQuotesToday();
    },[]);

    const fetchQuotesToday = async () => {
        try {
          const response = await axios.get('/today');
          console.log(response)
          const parsedQuotes = JSON.parse(response.data.contents);
          console.log(parsedQuotes)
          setQuoteOfDay(parsedQuotes[0]); // get the first (or only) quote
        } catch (error) {
          console.error("Error fetching quotes:", error);
          setErrorMessage(error);
        }finally{
            setLoading(false);
        }
      };
      
    return(
        <section className="max-container padding-x  grid grid-cols-1 place-items-center pt-10">
                <p className="text-3xl font-montserrat py-5 text-center max-w-[255px] ">Quote of the day</p>
                {loading ? 
                (<Spinner/>) : 
                (<div className=" max-w-[600px] place-items-center">
                        {errorMessage ? (
                        <p>{errorMessage}</p> ) : (
                        <div className=" max-w-[600px] place-items-center">
                            <h1 className="text-center text-3xl font-reenie sm:text-6xl">"{quoteOfDay.q}"</h1>
                            <p className="text-subtext py-5 text-lg ">{quoteOfDay.a}</p>    
                        </div>
                      )}
                </div>)}
        </section>
    );
}
export default Hero;