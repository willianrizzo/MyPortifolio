import Etec from '../../../assets/etec.png'
function ExperienciaUm() {
    return (
        <div>
            <div className='flex max-md:flex-col max-md:w-[145%]
            
            '>
                <div className="w-[55%] flex flex-col justify-center gap-5 pl-20 mt-24  bg-[#0c6199] rounded-md shadow-2xl
                max-md:w-[94%] max-md:ml-6 max-md:p-6  max-md:mt-5
                ">
                    <h2 className=" text-[22px] text-[#0EE6B7]
                    max-md:w-[100%] max-md:text-[18px]
                    ">Curso Técnico ETEC Heliópolis</h2>
                    <p className="w-[70%] text-[18px] text-white
                    max-md:w-full max-md:text-[15px]
                    ">Meu primeiro contato com a programação foi em 2019 quando entrei na ETEC Heliópolis, onde fiz ensino técnico integrado com ensino médio! lá aprendi sobre HTML5, CSS, JS, MySql e PHP! Foi la onde desenvolvi meus primeiro projetos.</p>
                </div>
                <div className='max-md:w-[95%] max-md:ml-6 max-md:flex max-md:justify-center max-md:mt-5'>
                    <img className='w-[45%] ml-[40%]  mt-20  rounded-md flex items-center
                    max-md:w-[100%] max-md:-ml-[1%] max-md:mt-0
                    ' src={Etec} alt="" />
                </div>
            </div>
        </div>
    )
}
export default ExperienciaUm