
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../axios';

const Quotes = ()=>{
    const [quoteList,setQuoteList] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     fetchQuotes();
        
    // },[]);

    // const fetchQuotes = async () => {
    //     try {
    //       const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
    //         method: 'GET',
    //         headers:{
    //             'X-Api-Key': 'mlr1r+Sy/24nlro4NsgXiQ==9TdBlhXt8TAzyua8'
    //         }
    //       });
    //       const data = await response.json();
    //       console.log(data[0]);
   
    //     } catch (error) {
    //       console.error("Error fetching quotes:", error);
    //     }
    //   };
    
        const fetchQuotes = async () => {
        try {
          const response = axios.get('/quotes');
          console.log(response)
        } catch (error) {
          console.error("Error fetching quotes:", error);
        }
      };
      


    return(
        <>
          
            <section className="max-container padding-x">

              <div className="overflow-hidden border-1 shadow-2xl border-slate-200 rounded-lg">
                    <div className="flex gap-5 animate-infinite-scroll-left whitespace-nowrap pt-5">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                    <div className="flex gap-5 animate-infinite-scroll-right whitespace-nowrap py-5">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                </div>
                
            </section>
        </>
       
    );

}
  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           
                </div> */}
export default Quotes;