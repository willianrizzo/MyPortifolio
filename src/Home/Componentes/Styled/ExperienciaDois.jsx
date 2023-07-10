import Etec from '../../../assets/etec.png'
function ExperienciaDois() {
    return (
        <div>
            <div className='flex'>
                <div className=''>
                    <img className='w-[45%] ml-[4%]  mt-20  rounded-md flex items-center' src={Etec} alt="" />
                </div>
                <div className="w-[55%] flex flex-col justify-center gap-5 pl-20 mt-24  bg-[#0c6199] rounded-md shadow-2xl ">
                    <h2 className=" w-[90%] text-[22px] text-right text-[#0EE6B7]">Curso Técnico ETEC Heliópolis</h2>
                    <p className="w-[90%] text-[18px] text-right text-white">Meu primeiro contato com a programação foi em 2019 quando entrei na ETEC Heliópolis, onde fiz ensino técnico integrado com ensino médio! lá aprendi sobre HTML5, CSS, JS, MySql e PHP! Foi la onde desenvolvi meus primeiro projetos.</p>
                </div>
            </div>
        </div>
    )
}
export default ExperienciaDois