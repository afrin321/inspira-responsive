import React from 'react'
import Bg from './../assets/bg.png'
import HomeNav from '../components/HomeNav'
import Gp1 from './../assets/new_logo.png'
import { motion } from 'framer-motion'

function Home2() {
  return (
    <div className='h-screen w-full home  max-[1366px]:px-[15%] min-[1920px]:px-[10%] flex flex-col justify-end overflow-hidden'>
        
        <div className='grid grid-cols-12 w-full h-fit relative'>
            <div className='col-span-5 h-full flex flex-col justify-end'>
                <motion.img 
                    initial={{ opacity: 0, scale: 0, translateY: '100vh' }}
                    animate={{ opacity: 1, scale: 1, translateY: '0vh'  }}
                    transition={{ delay: 0, duration: 1 }} src={Gp1} alt="" className='relative object-fill max-[1366px]:-left-[4vw]' />
            </div>
            <div className='col-span-0 min-[1920px]:col-span-1 '></div>
            <div className='col-span-5 min-[1920px]:col-span-4 flex flex-col p-0 m-0 '>
                <div className='relative !-top-[2vh] h-full max-h-[33%] font-bold text-white p-0 m-0 !text-[7vh] leading-tight min-[3840px]:text-[7vh] max-[768px]:text-[6vh] min-[1920px]:text-[76px] min-[1920px]:leading-[85px] flex flex-col justify-between'>
                    <motion.p
                        className="p-0 m-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.75 }}>EMBRACING</motion.p>
                    <motion.p
                        className="p-0 m-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 2 }}
                        transition={{ delay: 1.25, duration: 0.75 }}>YOUR</motion.p>
                    <motion.p
                        className="p-0 m-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 3 }}
                        transition={{ delay: 2, duration: 0.75 }}>BRAND</motion.p>
                </div>
                <div className='h-full flex flex-col justify-center'>
                    <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.75, duration: 0.75 }} className='text-[3vh] text-white w-[90%]'>
                        Soluciones en comunicación gráfica y gestión de marca para
                        procesos de etiquetado.
                    </motion.p>
                </div>
                <div className='h-full pt-[10%] flex flex-col justify-start !text-[12px]'>

                    <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }} className='bg-white  rounded-full px-[2em] py-[5px] text-[#F7063E] w-fit text-[2.5vh] min-[3840px]:text-[3vh]  '>Get started</motion.button>
                </div>
            </div>
            <div className='col-span-2 '></div>

        
        </div>
    </div>
  )
}

export default Home2