import { useState } from "react";
import img1 from "../../assets/img/nail1.png";
import img2 from "../../assets/img/nail2.png";
import img3 from "../../assets/img/nail3.png";
function NailInfo() {
    const [img, setImg] = useState([
        {id: 1,src: img1, alt: 'img' ,header: 'Nail Care', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic.'},
        {id: 2,src: img2, alt: 'img', header: 'Nail Art' ,text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic.'},
        {id: 3,src: img3, alt: 'img', header: 'Tips & Trends', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic.'},
    ])
  return (
    <div className="flex justify-center gap-50">
      {img.map((el) => (<div className="flex flex-col justify-center items-center w-1/5  gap-5 text-center">
        <img key={el.id} src={el.src} alt={el.alt} className="h-[113px]"/>
        <div className="custom-gray">{el.header}</div>
        <div>{el.text}</div>
      </div>))}
    </div>
  )
}

export default NailInfo
