
import Button from '../components/Button'
const Inspiration = ()=>{
    return (
        <section className="max-container padding-x grid grid-cols-1  justify-items-center">
            <h1 className='text-4xl font-reenie py-10 sm:text-6xl'>Insiprational Image</h1>

            <div className='border-1 h-90 w-[100%] sm:w-[70%]'>
                <img src="asd" alt="Inspirational Image" className='object-contain'/>


            </div>

            <div className='max-sm:w-full py-5'>
                <Button label='Generate Inspiration'/>
            </div>
        </section>
    );
}

export default Inspiration;