import Box from '../../assets/box.svg'

function Bghome(){
    return(
       <div className="flex mt-10">
            <div className="p-10 w-[45%] h-[90vh] flex flex-col gap-2 ml-10">
                <p className="text-[#0EE6B7] text-[44px]">Olá</p>
                <h2 className="text-white font-semibold text-[44px]">Meu nome é Willian,</h2>
                <h4 className="w-[105%] font-semibold font-outline-2 text-[#fff0] text-[58px]">Sou desenvolvedor <br /> front-end.</h4>
            </div>
            <div>
                <img className='h-96 shadow-2xl' src={Box} alt="" />
            </div>
       </div>
    )
}
export default Bghome