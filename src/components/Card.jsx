const Card = ()=>{
    return (
        <div className="shadow-lg border-1 border-gray-200 rounded p-6 flex flex-col justify-center items-center gap-4 hover:border-gray-600 transition ease-in duration-150">
            <p className=" text-center font-reenie text-2xl">"He who wishes to be obeyed must know how to command."</p>
            <div className="flex items-center justify-start gap-4 ">
                <img src="adfs" alt="" width={30} height={30}  className="rounded-full object-contain border-1"/>
                <p className="text-subtext">Niccolo Machiavelli</p>
            </div>
        </div>
    );
}

export default Card;