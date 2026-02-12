import icon1 from "../../assets/svg/031.svg";
import icon2 from "../../assets/svg/061.svg";
import icon3 from "../../assets/svg/female-hand-with-glitter-beige-nail-design-female-hand-hold-dry-autumn-flower-woman-hand-beige-fabric-background 2.svg";

function Hero() {
  const img = [
    { src: icon1, alt: "img" },
    { src: icon2, alt: "img" },
    { src: icon3, alt: "img" },
  ];

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Левая колонка */}
      <div className="w-1/2 min-h-screen flex flex-col  justify-between items-center bg-[#FCF8EF]">
        <div className="pl-20 flex w-full justify-start">
          <h1 className="text-black text-4xl md:text-5xl font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
            Nail Code
          </h1>
        </div>

        {/* Контейнер с иконками */}
        <div className="relative w-[500px] h-[400px] flex justify-center items-center brightness-90 transition-all duration-300 mb-6">
          <img
            src={img[0].src}
            alt=""
            className="absolute w-full h-full object-contain z-1 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={img[1].src}
            alt=""
            className="absolute w-full h-full object-contain z-0 opacity-60"
          />
          <img
            src={img[2].src}
            alt=""
            className="absolute w-full h-full object-contain z-2 bottom-19 left-5"
          />
        </div>

        {/* Нижний блок */}
        <div className="bg-[#D8B192] w-full  p-6 text-center">
          <h2 className="text-xl font-semibold text-white">Идеальный маникюр</h2>
          <h3 className="text-lg text-white/90 mt-1">Онлайн запись за 2 минуты</h3>
        </div>
      </div>

      {/* Правая колонка с картинкой */}
      <div className="w-1/2 min-h-screen overflow-hidden">
        <img
          src="img/Group9.jpg"
          alt="girl"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;