
import Card from "../components/Card";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Quotes = ()=>{

    const [quoteList,setQuoteList] = useState([]);
    const api_url ="https://zenquotes.io/api/quotes/";

    // useEffect(()=>{
    //     fetchQuotes();
        

    // },[]);

    // const fetchQuotes = async () => {
    //     try {
    //       const response = await fetch("https://zenquotes.io/api/today ");
    //       const data = await response.json();
    //       console.log(data); // Do something with the quotes
    //     } catch (error) {
    //       console.error("Error fetching quotes:", error);
    //     }
    //   };
      


    return(
        <>
          
            <section className="max-container padding-x">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </>
       
    );

}

export default Quotes;