import Blockfy from '../../../assets/blockfy.png'
function ExperienciaDois() {
    return (
        <div>
            <div className='flex max-md:w-[145%]'>
                <div className='max-md:hidden'>
                    <img className='w-[45%] ml-[4%]  mt-20  rounded-md flex items-center' src={Blockfy} alt="" />
                </div>
                <div className="w-[75%] flex flex-col justify-center gap-5 pl-20 mt-24  bg-[#0c6199] rounded-md shadow-2xl
                max-md:w-[95%] max-md:ml-6 max-md:p-6 max-md:mt-5
                ">
                    <h2 className=" w-[90%] text-[22px] text-right text-[#0EE6B7]
                     max-md:w-[100%] max-md:text-[18px] max-md:text-left
                    ">Proa Profissão - Desenvolvedor Web Java</h2>
                    <p className="w-[90%] text-[18px] text-right text-white
                    max-md:w-full max-md:text-left max-md:text-[15px]
                    ">No início de 2023 entrei no Proa, onde pude me desenvolver tanto profissionalmente quando pessoalmente, melhorei minhas softskills e minhas hardskills! Foi lá onde realizei grande parte dos meus projetos, conheça alguns dos meus projetos!</p>
                    <div className='flex justify-end mr-14
                    max-md:w-[100%] max-md:mr-0 max-md:flex max-md:items-center max-md:justify-center
                    '>
                        <a href='https://github.com/willianrizzo' className='w-[25%] text-center text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg
                        max-md:w-[55%]
                        '>Acessar</a>
                    </div>

                </div>
                
            </div>
            <div className='max-md:w-[136%] max-md:ml-6 max-md:flex max-md:justify-center max-md:mt-5 hidden'>
                    <img className='w-[45%] ml-[40%]  mt-20  rounded-md flex items-center
                    max-md:w-[100%] max-md:-ml-[1%] max-md:mt-0
                    ' src={Blockfy} alt="" />
                </div>
        </div>
    )
}
export default ExperienciaDois