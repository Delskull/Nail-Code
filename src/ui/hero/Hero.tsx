import icon1 from "../../assets/svg/031.svg";
import icon2 from "../../assets/svg/061.svg";
import icon3 from "../../assets/svg/female-hand-with-glitter-beige-nail-design-female-hand-hold-dry-autumn-flower-woman-hand-beige-fabric-background 2.svg";
function Hero() {
  const img = [
    {
      src: icon1,
      alt: "img",
    },
    {
      src: icon2,
      alt: "img",
    },
    {
      src: icon3,
      alt: "img",
    },
  ];
  return (
    <div className="flex max-w-screen overflow-hidden">
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#FCF8EF]">
        <div>
          <h1 className="text-black text-4xl [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Nail Code</h1>
        </div>
        <div className="flex relative w-200 h-200 justify-center items-center brightness-90  transition-all duration-300">
          <img src={img[0].src} alt="" className="z-2 absolute w-auto h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110" />
          <img src={img[1].src} alt="" className="z-1 absolute w-auto h-auto object-cover"/>
          <img src={img[2].src} alt="" className="z-3 absolute w-auto h-auto object-cover bottom-80"/>
        </div>
        <div>
          <div>
            <h2>text</h2>
            <h3>text 2</h3>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="img/Group9.jpg"
          alt="girl"
          className="w-full max-h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
