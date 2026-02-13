import { useState } from "react"
import { FaRegCalendar } from "react-icons/fa";
function Regdata() {
    const [regBlock, setRegBlock] = useState([
        {id: 1, name: 'Check In', data: 'data'},
        
    ])
    return (
        <div className="flex  p-20 justify-between ">
            {regBlock.map(el => 
            <div key={el.id} className="flex  gap-1 flex-col border-b ">
                
                <span className="flex gap-2 text-[#D8B192]"> <FaRegCalendar />{el.name}</span>
                <span className="ml-2 text-zinc-700"> {el.data}</span>
                <span className="border-black-300 pb-0.5 px-30"></span>
                
                </div>)}
                <button className="bg-[#D8B192] text-white px-6 py-3 rounded-full cursor-pointer">Записаться</button>
        </div>
    );
}
export default Regdata