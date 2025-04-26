
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../axios';

const Quotes = ()=>{
    const [quoteList,setQuoteList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchQuotes();
    },[]);
    
    const fetchQuotes = async ()=>{
      setLoading(true)
      try{
          const response = await axios.get('/quotes');
          const parsedQuotes = JSON.parse(response.data.contents);
          console.log(parsedQuotes)
          setQuoteList(parsedQuotes);
      }catch(error){
          console.log(error)
          setErrorMessage(error)
      }finally{
          setLoading(false);
      }
      }; 
      


    return(
        <>
          
            <section className="max-container padding-x">

              <div className="overflow-hidden border-1 shadow-2xl border-slate-200 rounded-lg">
                    <div className="flex gap-5 animate-infinite-scroll-left whitespace-nowrap pt-5">
                      {quoteList.map((quote, index) =>
                       <Card key={index} quote={quote}/>
                    )}
                    </div>
                    <div className="flex gap-5 animate-infinite-scroll-right whitespace-nowrap py-5">
                    {quoteList.slice().reverse().map((quote, index) =>
                        <Card key={index} quote={quote}/>
                      )}
                    </div>
              </div>
            </section>
        </>
    );

}

export default Quotes;