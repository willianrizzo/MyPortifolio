import Blockfy from '../../../assets/blockfy.png'
function ExperienciaDois() {
    return (
        <div>
            <div className='flex'>
                <div className=''>
                    <img className='w-[45%] ml-[4%]  mt-20  rounded-md flex items-center' src={Blockfy} alt="" />
                </div>
                <div className="w-[75%] flex flex-col justify-center gap-5 pl-20 mt-24  bg-[#0c6199] rounded-md shadow-2xl ">
                    <h2 className=" w-[90%] text-[22px] text-right text-[#0EE6B7]">Proa Profissão - Desenvolvedor Web Java</h2>
                    <p className="w-[90%] text-[18px] text-right text-white">No início de 2023 entrei no Proa, onde pude me desenvolver tanto profissionalmente quando pessoalmente, melhorei minhas softskills e minhas hardskills! Foi lá onde realizei grande parte dos meus projetos, conheça alguns dos meus projetos!</p>
                    <div className='flex justify-end mr-14'>
                        <a href='https://github.com/willianrizzo'  className='w-[25%] text-center text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg '>Acessar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExperienciaDois