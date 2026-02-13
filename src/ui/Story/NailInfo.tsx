import { useState } from "react";
import img1 from "../../assets/img/nail1.png";
import img2 from "../../assets/img/nail2.png";
import img3 from "../../assets/img/nail3.png";
function NailInfo() {
    const [img, setImg] = useState([
        {id: 1,src: img1, alt: 'img'},
        {id: 2,src: img2, alt: 'img'},
        {id: 3,src: img3, alt: 'img'},
    ])
  return (
    <div>
      {img.map((el) => (<div>
        <img key={el.id} src={el.src} alt={el.alt}/>
        <div>text</div>
        <div>text2</div>
      </div>))}
    </div>
  )
}

export default NailInfo
