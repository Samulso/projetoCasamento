export default function Carousel({ children: slides }) {
   const imagens = [
    "projetoCasamento/src/assets/img/img_1.png",
    
   ]
    return (
    <div className="overflow-hidden relative">
        <div className="flex">
            {slides}
        </div >
        <div className="absolute inset-0 flex items-center justifty-between p-4">
        <button>
            <ChevronLeft size={40}/>
        </button>
        <button>
            <ChevronRight size={40}/>
        </button></div>
    </div>
    )
}