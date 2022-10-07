import { useState } from "react";
import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiCheckDoubleFill,
  RiMessage2Line,
  RiMenu3Fill,
  RiAddLine,
  RiImage2Line,
  RiEmotionHappyLine,
  RiSendPlaneLine,
  RiMore2Fill,
  RiInstagramLine,
  RiTwitterLine,
  RiTwitchLine,
  RiFacebookLine,
} from "react-icons/ri";
import { BiMicrophone, BiMap } from "react-icons/bi";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full h-[8vh] md:h-[5vh] flex items-center justify-between px-8 bg-[#141517]">
        <div>
          <img src="logoW.png" className="w-10 h-10 object-cover" />
        </div>
        <form className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              className="bg-[#050505] outline-none py-1 pl-4 pr-8 rounded text-gray-300"
              placeholder="Search"
            />
            <RiSearchLine className="absolute right-2 top-2 text-gray-300" />
          </div>
        </form>
        <div className="flex items-center gap-6">
          <div className="relative">
            <RiNotification3Line className="text-xl text-gray-300" />
            <span className="bg-purple-600 absolute rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2">
              2
            </span>
          </div>
          {/* User */}
          <div className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/foto-gratis/chico-alegre-feliz-mostrando-gesto-bien_74855-3502.jpg"
              className="w-6 h-6 object-cover rounded-full ring-2 ring-white"
            />
            <RiArrowDownSLine className="text-gray-300" />
          </div>
        </div>
      </header>
      {/* Content */}
      <main className="h-[92vh] md:h-[95vh] grid grid-cols-1 lg:grid-cols-8">
        {/* Menu movil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed bottom-4 right-4 bg-purple-600 p-3 rounded-full text-white z-50"
        >
          <RiMenu3Fill />
        </button>
        <section
          className={`col-span-2 bg-[#22222A] p-8 overflow-y-scroll fixed w-[80%] md:w-[50%] lg:w-full h-full top-0 transition-all z-50 lg:static ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          {/* Title and Search */}
          <div className="mb-8">
            <h1 className="text-white text-3xl mb-4">Messages</h1>
            <form className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#050505] outline-none py-2 pl-4 pr-8 rounded text-gray-300 w-full"
                  placeholder="Search"
                />
                <RiSearchLine className="absolute right-2 top-3 text-gray-300" />
              </div>
            </form>
          </div>
          {/* Users */}
          <div>
            {/* User */}
            <a
              href="#"
              className="flex w-full gap-2 mb-8 ring-8 ring-[#1E1F24] bg-[#1E1F24] rounded"
            >
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="text-sm absolute text-green-500 right-0 bottom-1 ring-2 ring-white rounded-full" />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Killian James</h3>
                  <p className="text-green-300">Typing...</p>
                </div>
                <div>
                  <h3 className="text-gray-500">4:30 PM</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    2
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500">Wow really cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                </div>
              </div>
            </a>
            {/* All messages */}
            <h5 className="text-gray-300 flex items-center gap-2 my-8">
              <RiMessage2Line /> All messages
            </h5>
            {/* User */}
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-senior-sonriente-chaqueta-jean_23-2149082536.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Killian James</h3>
                  <p className="text-green-300">Typing...</p>
                </div>
                <div>
                  <h3 className="text-gray-500">4:30 PM</h3>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/abuelos-felices-usando-su-computadora-portatil-digital_329181-14741.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/pareja-ancianos-mujer-sentada-skate-parque_181624-52490.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#" className="flex w-full gap-2 mb-8">
              {/* Image */}
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-joven-alegre-camisa-blanca_171337-17467.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              {/* Name and Hour */}
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500">9:36 AM</h3>
                  <span className="text-xl text-green-300 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="bg-[#1E1F24] col-span-4 p-4 md:p-8 relative">
          {/* Info group */}
          <div className="absolute left-0 top-0 w-full flex items-center gap-8 p-4 md:p-8 border-b border-gray-800">
            <div>
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-14 md:w-20 h-14 md:h-20 object-cover rounded-full"
              />
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-2 items-center justify-between">
              <div>
                <h1 className="text-xl md:text-3xl text-gray-300">
                  Design Team
                </h1>
                <p className="text-gray-500 text-sm md:text-base">
                  60 members, 10 online
                </p>
              </div>
              {/* Users */}
              <div className="flex items-center gap-4">
                <div className="flex items-start">
                  <img
                    src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>
                <button className="bg-[#050505] p-2.5 rounded-full text-gray-300">
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
          {/* Send Message */}
          <div className="absolute bg-[#22222A] left-0 bottom-0 w-full p-8">
            <form className="relative">
              <BiMicrophone className="absolute left-4 top-[10px] text-gray-300 text-xl hover:cursor-pointer" />
              <input
                type="text"
                className="bg-[#1E1F24] py-2 pl-10 pr-28 outline-none w-full rounded-full text-gray-300"
              />
              {/* Icons message */}
              <div className="absolute right-4 top-3 flex items-center gap-2 text-gray-300">
                <RiImage2Line className="hover:cursor-pointer" />
                <RiEmotionHappyLine className="hover:cursor-pointer" />
                <RiSendPlaneLine className="hover:cursor-pointer" />
                <BiMap className="hover:cursor-pointer" />
              </div>
            </form>
          </div>
          {/* Content messages */}
          <div className="mt-32 overflow-y-scroll max-h-[calc(100%-210px)]">
            {/* Message user */}
            <div className="flex gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">
                  Killan James{" "}
                  <span className="text-gray-500 font-normal text-sm ml-8">
                    10:12 AM
                  </span>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Hi, Are you still Web Designer{" "}
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Would love to see some design 🙂
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="my-8 relative">
              <p className="text-gray-600 text-sm text-center bg-[#1E1F24] py-1 px-4 absolute -top-[14px] ml-[50%] -translate-x-[50%]">
                Today, March 24
              </p>
              <hr className="border-gray-600" />
            </div>
            {/* Message user */}
            <div className="flex gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">
                  Claudia Maudi{" "}
                  <span className="text-gray-500 font-normal text-sm ml-8">
                    10:30 AM
                  </span>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Lorem Ipsum ha sido el texto de relleno estándar de las
                    industrias desde el año 1500
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Lorem Ipsum ha sido el texto 🙂
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-feliz-mediados-mujer-adulta-abrazando-su-madre-senior_1262-18557.jpg"
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/pareja-sonriente-tiro-medio-fuera_23-2148984226.jpg"
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Message user main */}
            <div className="flex justify-end gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg"
                className="w-10 h-10 object-cover rounded-full order-1"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2 text-right">
                  <span className="text-gray-500 font-normal text-sm mr-8">
                    10:12 AM
                  </span>
                  Distin Watson{" "}
                </h4>
                <div className="flex items-center justify-end gap-2 mb-2">
                  <p className="bg-purple-500 py-2 px-4 rounded-tl-lg rounded-bl-lg rounded-br-lg text-white order-1">
                    Hi, Are you still Web Designer{" "}
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Message user */}
            <div className="flex gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">
                  Killan James{" "}
                  <span className="text-gray-500 font-normal text-sm ml-8">
                    10:12 AM
                  </span>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Hi, Are you still Web Designer{" "}
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Would love to see some design 🙂
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden lg:block bg-[#22222A] col-span-2">
          {/* Image */}
          <div className="flex flex-col items-center justify-center gap-2 text-center my-10">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <h2 className="text-gray-300 text-xl">Jorge Luis Trejo</h2>
              <p className="text-gray-500">@jorgeetrejoo</p>
            </div>
          </div>
          {/* Attachments */}
          <div className="p-8">
            {/* Social media */}
            <a
              href="#"
              className="flex items-center gap-4 mb-4 p-4 rounded-lg hover:bg-[#292A30] transition-colors"
            >
              {/* Icon */}
              <div className="bg-[#1E1F24] p-4 text-xl rounded-lg text-purple-600">
                <RiInstagramLine />
              </div>
              <div>
                <sapn className="text-gray-300 font-semibold">@jotredev</sapn>
                <p className="text-gray-500">150,000 followers</p>
              </div>
            </a>
            {/* Social media */}
            <a
              href="#"
              className="flex items-center gap-4 mb-4 p-4 rounded-lg hover:bg-[#292A30] transition-colors"
            >
              {/* Icon */}
              <div className="bg-[#1E1F24] p-4 text-xl rounded-lg text-purple-600">
                <RiTwitterLine />
              </div>
              <div>
                <sapn className="text-gray-300 font-semibold">@jotreDev</sapn>
                <p className="text-gray-500">150,000 followers</p>
              </div>
            </a>
            {/* Social media */}
            <a
              href="#"
              className="flex items-center gap-4 mb-4 p-4 rounded-lg hover:bg-[#292A30] transition-colors"
            >
              {/* Icon */}
              <div className="bg-[#1E1F24] p-4 text-xl rounded-lg text-purple-600">
                <RiTwitchLine />
              </div>
              <div>
                <sapn className="text-gray-300 font-semibold">jotreDev</sapn>
                <p className="text-gray-500">150,000 followers</p>
              </div>
            </a>
            {/* Social media */}
            <a
              href="#"
              className="flex items-center gap-4 mb-4 p-4 rounded-lg hover:bg-[#292A30] transition-colors"
            >
              {/* Icon */}
              <div className="bg-[#1E1F24] p-4 text-xl rounded-lg text-purple-600">
                <RiFacebookLine />
              </div>
              <div>
                <sapn className="text-gray-300 font-semibold">jotredev</sapn>
                <p className="text-gray-500">150,000 followers</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
