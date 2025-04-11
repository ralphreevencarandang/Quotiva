import Card from "../components/Card";
import Quotes from "../section/Quotes";
import Button from "../components/Button";
const QuotesPage = () => {
  return (
    <>
           

                <section className="max-container padding-x  grid grid-cols-1 place-items-center pt-20 ">
                    <div className=" max-w-[600px] place-items-center">
                        <h1 className="text-center text-3xl font-reenie sm:text-6xl">
                            "He who wishes to be obeyed must know how to command."
                        </h1>
                        <p className="text-subtext py-5 text-lg text-center">
                            Niccolo Machiavelli
                        </p>
                        <div className="w-full sm:place-items-center">
                            <Button label="Generate Quotes" />
                        </div>
                    </div>

                    <section className="max-container  pt-20">

                        <button>
                             <img src='src/assets/icons/refresh.svg' alt="refresh" width={30} className="m-5 cursor-pointer hover:scale-125 transition ease-out duration-500" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                           
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </section>

                    
                </section>
        
    </>
  );
};

export default QuotesPage;
