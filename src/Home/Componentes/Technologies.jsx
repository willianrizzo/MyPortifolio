import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3 } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoJava } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'


function Technologies() {
    return (
        <div className='w-[95%] m-auto mt-40
        max-md:w-[155%] max-md:mt-20
        '>
            <div className='w-[75%] m-auto'>
                <h2 className='text-center text-3xl text-[#0EE6B7]
                max-md:text-xl
                '>Linguagens e tecnologias que estudo:</h2>
            </div>

            <section className='flex w-full justify-center items-center mt-4 gap-24'>
                <div className='w-[40%]'>
                    <div className='flex w-full items-start justify-center gap-2 mt-6
                    max-md:grid-cols-2 max-md:grid max-md:items-center max-md:justify-center max-md:ml-[8%]
                    '>
                        <AiFillHtml5 className='text-white text-[45px]' />
                        <BiLogoCss3 className='text-white text-[45px]'/>
                        <BiLogoJavascript className='text-white text-[45px]'/>
                        <BiLogoReact className='text-white text-[45px]'/>
                        <BiLogoJava className='text-white text-[45px]'/>
                        <SiMysql className='text-white text-[45px]' />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Technologies