import Wiu from '../../assets/wiu.png'

function Bghome(){
    return(
       <div className="flex mt-10 
       max-md:flex-col max-md:gap-40 ">
            <div className="pl-10 pt-10 w-[55%] flex flex-col gap-2 ml-10 
            max-md:w-[100%] max-md:ml-[20%] max-md:text-center max-md:pt-0 max-md:items-center
            ">
                <p className="text-[#0EE6B7] text-[44px] 
                max-md:text-[30px]"
                >Olá</p>
                <h2 className="text-white font-semibold text-[44px]
                max-md:text-[30px]"
                >Meu nome é Willian,</h2>
                <h4 className="w-[105%] font-semibold font-outline-2 text-[#fff0] text-[58px]
                max-md:text-[30px] max-md:w-[100%]
                ">Sou desenvolvedor <br /> front-end.</h4>
            </div>
            <div>
                <img className='w-[50%] ml-[25%] -mt-36
                max-md:w-[100%] max-md:ml-[30%]
                ' src={Wiu} alt="" />
            </div>
       </div>
    )
}
export default Bghome