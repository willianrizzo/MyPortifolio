import Wiu from '../../assets/wiu.png'

function Bghome(){
    return(
       <div className="flex mt-10 ">
            <div className="pl-10 pt-10 w-[55%] flex flex-col gap-2 ml-10">
                <p className="text-[#0EE6B7] text-[44px]">Olá</p>
                <h2 className="text-white font-semibold text-[44px]">Meu nome é Willian,</h2>
                <h4 className="w-[105%] font-semibold font-outline-2 text-[#fff0] text-[58px]">Sou desenvolvedor <br /> front-end.</h4>
            </div>
            <div>
                <img className='w-[50%] ml-[25%] -mt-36' src={Wiu} alt="" />
            </div>
       </div>
    )
}
export default Bghome