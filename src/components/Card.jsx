const Card = ({quote:{q, a}})=>{
    return (
        <div className="shadow-lg border-1 border-gray-200 rounded p-6 flex flex-col justify-center items-center gap-4 hover:border-gray-600 transition ease-in duration-150">
            <p className=" text-center font-reenie text-2xl break-words">{q}</p>
            <div className="flex items-center justify-start gap-4 ">
                {/* <img src={imgUrl} alt="" width={30} height={30}  className="rounded-full object-contain border-1"/> */}
                <p className="text-subtext">{a}</p>
            </div>
        </div>
    );
}

export default Card;