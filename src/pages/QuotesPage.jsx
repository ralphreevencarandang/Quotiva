import Card from "../components/Card";
import Quotes from "../section/Quotes";
import Button from "../components/Button";
import { useCallback, useEffect, useState } from "react";
import axios from '../axios';
import Spinner from "../components/Spinner";
import React from "react";
const QuotesPage = () => {

    const [randomQuotes, setRandomQuotes] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(()=>{
        fetchRandomQuotes();
         fetchQuotes();
    }, []);

    const fetchRandomQuotes = async ()=>{
        setLoading(true);
        try {
                const response = await axios.get('/random');
                console.log(response.data.contents);
                const parsedQuotes = JSON.parse(response.data.contents);
                console.log(parsedQuotes)
                setRandomQuotes(parsedQuotes[0]);
        }catch(error){
            console.log(error);
            setErrorMessage(errorMessage);
        }finally{
            setLoading(false)
        }
    }
    
    const fetchQuotes = async ()=>{
        try{
            const response = await axios.get('/quotes');
            const parsedQuotes = JSON.parse(response.data.contents);
            console.log(parsedQuotes)
            setQuotes(parsedQuotes);
        }catch(error){
            console.log(error)
            setErrorMessage(error)
        }
    }; 

    function generateRandomQuotes (){
        fetchRandomQuotes();
        console.log(randomQuotes)
 
    }

    


  return (
    <>
        
                <section className="max-container padding-x  grid grid-cols-1 place-items-center pt-20 ">
                    <div className=" max-w-[600px] place-items-center">
                        {loading ? (
                            <Spinner/>
                        ) : (errorMessage ? 
                            <p>{errorMessage}</p> :
                         <div>
                                <h1 className="text-center text-3xl font-reenie sm:text-6xl">
                                "{randomQuotes.q}"
                                </h1>
                                <p className="text-subtext py-5 text-lg text-center">
                                    {randomQuotes.a}
                                </p>
                         </div>
                         )}
                          <div className="w-full sm:place-items-center">
                                    <Button label="Generate Quotes" onClick={generateRandomQuotes} />
                        </div>
                        
                    </div>

                    <section className="max-container  pt-20">
    

                        {loading ? (
                            <Spinner/>
                           ) : 
                            <div>
                                 <button>
                                    <img src='src/assets/icons/refresh.svg' alt="refresh" width={30} className="m-5 cursor-pointer hover:scale-125 transition ease-out duration-500" onClick={()=>{fetchQuotes()}}/>
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {quotes.map((quote, index) => 
                                        <Card key={index} quote={quote}/>
                                    )}                             
                                </div>
                            </div>
                           }                   
                    </section>
                </section>
        
    </>
  );
};

export default QuotesPage;
