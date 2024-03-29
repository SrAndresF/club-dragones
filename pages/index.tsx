import Main from "../components/layout/Main"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Slider from "../components/Slider"
import { NextPage } from "next"
const Home : NextPage = () => {

  return (
    <Main title="Bienvenido">
      
      
      
      <motion.div 
      className="h-full w-full text-start "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Slider>
        <div className="  ml-7  mt-10 sm:ml-20 sm:mt-24 ">
          <motion.h2 
          initial={{x:300}}
          animate={{x:0}}
          transition={{duration:0.5}}
          className="text-white text-5xl lg:text-7xl font-bold ">Club <br /> De <br /> Baloncesto</motion.h2>
          <motion.p 
          initial={{x:300}}
          animate={{x:0}}
          transition={{duration:0.5}}
          className="text-white text-base md:text-lg mt-3">La primera clase es <b>100% gratis</b>, además <br /> contamos con 2 sedes así que, no <br /> esperes más e <b>inscríbete</b>.</motion.p>
          <Link href="/contacto"><a className="bg-secondary w-36 h-12 md:w-44 md:h-14 rounded-lg md:rounded-2xl mt-3  hover:translate-x-2 hover:translate-y-2 hover:bg-opacity-90 text-lg justify-center items-center text-center flex text-white ">¡Inscribete Aquí!</a></Link>
        </div>
        </Slider>
        </motion.div>
        

      <div>
      <div className="flex flex-col justify-center items-start h-screen  lg:-mt-0 -mt-36">
      <h3 className=" font-bold text-4xl lg:text-7xl ml-7 sm:ml-20 mb-4  sm:mt-0">Valores</h3>
      <p className=" ml-7 sm:ml-20 text-base">El <b>club Dragones</b> se caracteriza no solo por formar <br />
      deportistas, vamos más allá. Aportamos valores para formar <br /> seres <b>humanos de calidad.</b> Por ello nos representa:
      </p>
      <ul className=" list-disc ml-12 sm:ml-24 mt-4 mb-4">
      <li>El compañerismo</li>
      <li>La lealtad</li>
      <li>El respeto</li>
      <li>La honestidad</li>
      <li>La solidaridad</li>
      </ul>
      <Link href="/contacto"><a className="text-white text-center text-normal bg-secondary px-10 py-3 md:py-2 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-7">Comenzar</a></Link>
      </div>
      <div className=" -mt-20 md:-mt-0 relative md:absolute ml-7 sm:ml-3 md:ml-0  md:top-full lg:top-full-2 sm:right-0 bg-principal rounded-full w-80 h-80  md:w-96 md:h-96 lg:w-128 lg:h-128 -z-10">
        <div className="absolute right-12 sm:right-0 md:right-20 top-20 lg:-rotate-6  z-0">
        <motion.img
        initial={{x:-300}}
        animate={{x: 0}}
        transition={{duration: 2}}
        src="/img/grupoImg.png"
        alt="dragones grupo"
        width="1080 / 3"
        height="1080 / 3"
        >
        </motion.img>
        </div>
      </div>
      </div>

      <div className="flex  flex-col sm:flex-row justify-start  sm:justify-end mt-20 md:mt-0">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-10 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Integración</h3>
      <p className="sm:ml-20 mb-4 ml-10">Todos los problemas tienen la misma raíz: <br />
       <b>El miedo</b>, que desaparece gracias al <b>amor</b>; <br />  pero el amor nos da miedo.
      </p>
      
      <Link href="/contacto"><a className="text-white text-center text-normal bg-secondary px-10 py-2 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-7">Comenzar</a></Link>
      </div>
      <div className="flex md:ml-20  md:w-1/3 lg:w-1/2 bg-principal  h-screen -mt-80 md:-mt-0">
        <div className="flex flex-row flex-flow justify-center items-center">
        <div className="absolute right-8 md:right-96 mb-128 ">
            <Image src="/img/integraciones/banner.png" width={500/4} height={500/4} alt="banner1" layout="intrinsic" />
          </div>
          <div className="absolute right-5 md:right-10">
            <Image className="rounded-full object-cover" src="/img/integraciones/integraciones1.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute right-44 md:right-20 mb-128 sm:mb-full-2 md:mb-banner  rotate-180">
            <Image src="/img/integraciones/banner.png" width={500/4} height={500/4} alt="banner1" layout="intrinsic" />
          </div>
          <div className="absolute  md:right-60 sm:right-128 sm:-ml-10">
            <Image className="rounded-full object-cover" src="/img/integraciones/integraciones2.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute mb-128 right-0">
            <Image className="rounded-full object-cover" src="/img/integraciones/integraciones3.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute left-24 md:left-full-2 mt-128  rotate-45">
            <Image src="/img/integraciones/banner.png" width={500/4} height={500/4} alt="banner1" layout="intrinsic" />
          </div>
          <div className="absolute right-56 sm:right-integracion-lg mb-128">
            <Image className="rounded-full  object-cover" src="/img/integraciones/integraciones4.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="relative left-36 md:left-44 bottom-36">
            <Image className="rounded-full  object-cover" src="/img/integraciones/integraciones5.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute right-60 sm:right-integracion-lg mt-128">
            <Image className="rounded-full object-cover" src="/img/integraciones/integraciones6.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute mt-128 right-0 md:right-20">
            <Image className="rounded-full object-cover" src="/img/integraciones/integraciones7.png" width={500/3} height={500/3} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute right-20 md:right-60 mt-full-2 md:mt-banner  rotate-15">
            <Image src="/img/integraciones/banner.png" width={500/4} height={500/4} alt="banner1" layout="intrinsic" />
          </div>
        </div>
      </div>
      </div>



      
    </Main>
  )
}

export default Home
