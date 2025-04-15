
import { useEffect, useState } from 'react';
import Button from '../components/Button'
import axios from '../axios';
import Spinner from '../components/Spinner';
import React from 'react';
const Inspiration = ()=>{
    const [inspiration, setInspiration ] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchInspiration();
    }, []);

    const fetchInspiration = async ()=>{
        setLoading(true);
        try {
            const response = await axios.get('/image');
            console.log('response data:' , response.data)
            setInspiration(response.data.contents)
        }catch(error){
            console.log(error)
            setErrorMessage(error);
        }finally{
            setLoading(false)
        }
    }

    function generateInspiration (){
        fetchInspiration();
    }

    return (
        <section className="max-container padding-x grid grid-cols-1  justify-items-center">
            <h1 className='text-4xl font-reenie py-10 sm:text-6xl'>Insiprational Image</h1>

            <div className='  w-[100%] sm:w-[70%] grid grid-cols-1 place-items-center'>
                {loading ? (
                    <Spinner/>
                ): (errorMessage ? <p>{errorMessage}</p> : 
                    <img src={inspiration} alt="Inspirational Image" className='object-contain' width={500}/>
                )}
            </div>
            <div className='max-sm:w-full py-5'>
                <Button label='Generate Inspiration' onClick={generateInspiration}/>
            </div>
        </section>
    );
}

export default Inspiration;