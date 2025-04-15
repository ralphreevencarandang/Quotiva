const Button = ({label, onClick})=>{
        return (
            <div>
                <button className="text-white bg-black py-2 px-5 rounded-lg font-montserrat text-center  cursor-pointer w-full hover:bg-stone-900" onClick={onClick}
                >{label}</button>
            </div>
        );
}

export default Button;