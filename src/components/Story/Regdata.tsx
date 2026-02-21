import { useState } from "react"
import { FaRegCalendar } from "react-icons/fa";
import Button from "../ui/button.tsx";
function Regdata() {
    const [regBlock, setRegBlock] = useState([
        {id: 1, name: 'Check In', data: 'data'},
        
    ])
    return (
        <div className="flex  p-20 justify-between ">
            {regBlock.map(el => 
            <div key={el.id} className="flex  gap-1 flex-col border-b ">
                
                <span className="flex gap-2 text-[#D8B192]"> <FaRegCalendar />{el.name}</span>
                <span className="ml-2 custom-gray"> {el.data}</span>
                <span className="border-black-300 pb-0.5 px-30"></span>
                
                </div>)}
                <Button text="Записаться"/>
        </div>
    );
}
export default Regdata