const Button = ({label})=>{
        return (
            <div>
                <button className="text-white bg-black py-2 px-5 rounded-lg font-montserrat text-center  cursor-pointer w-full hover:bg-stone-900">{label}</button>
            </div>
        );
}

export default Button;