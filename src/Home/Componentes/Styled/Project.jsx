import Welldnez from '../../../assets/welldnez.png'
import Kixx from '../../../assets/kixx.png'
import Connect from '../../../assets/connect.png'

function Project(){
    return(
        <div>
            <div className='w-[95%] flex gap-20 m-auto mt-20'>
                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md'>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Welldnez</h1>
                        <p className='text-white'>Meu primeiro trabalho realizado no Instituto PROA! Um site voltado para alimentação saudável, a Welldnez foi feita para mantermos a saúde em dia! Comer em restaurantes que oferecem uma alimentação saudável e agradável para todos! Veja mais clicando no link!</p>
                        <img className='rounded-md' src={Welldnez} alt="" />
                        <button className='w-[50%] text-lg text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg'>Conheça a Welldnez!</button>
                    </div>

                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md'>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Kixx Store</h1>
                        <p className='text-white'>Kixx Store foi um projeto voltado para uma loja de roupas do estilo "streetwear", onde o objetivo era ajudar pessoas a terem suas plataformas para divulgar seus projetos ou produtos. Realizei o sonho de amigos e foi muito gratificante ter alcançado esse resultado!</p>
                        <img className='rounded-md' src={Kixx} alt="" />
                        <button className='w-[50%] text-lg text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg'>Acesse a Kixx!</button>
                    </div>

                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md'>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Connect Health</h1>
                        <p className='text-white'>Nosso último e maior projeto desenvolvido no Instituto PROA! A Connect Health é uma multiplataforma que leva informações e consultas onlines com profissionais das áreas da psicologia e da nutrição, tudo isso por um preço acessível! <br/> Venha conhecer a Connect!</p>
                        <img className='rounded-md' src={Connect} alt="" />
                        <button className='w-[50%] text-lg text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg'>Visite a Connect!</button>
                    </div>

                </div>
        </div>
    )
}
export default Project