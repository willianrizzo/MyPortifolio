import Welldnez from '../../../assets/welldnez.png'
import Kixx from '../../../assets/kixx.png'
import Connect from '../../../assets/connect.png'

function Project(){
    return(
        <div>
            <div className='w-[95%] flex gap-20 m-auto mt-20 
            max-md:flex-col max-md:w-[155%] max-md:items-center
            '>
                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md
                    max-md:w-[95%]
                    '>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Welldnez</h1>
                        <p className='text-white max-md:text-[15px]'>Meu primeiro trabalho realizado no Instituto PROA! Um site voltado para alimentação saudável, a Welldnez foi feita para mantermos a saúde em dia! Comer em restaurantes que oferecem uma alimentação saudável e agradável para todos! Veja mais clicando no link!</p>
                        <img className='rounded-md' src={Welldnez} alt="" />
                        <a href='https://welldnez-food.vercel.app' className='w-[50%] text-lg text-center text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg
                        max-md:w-[75%]
                        '>Conheça a Welldnez!</a>
                    </div>

                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md
                    max-md:w-[95%]
                    '>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Kixx Store</h1>
                        <p className='text-white max-md:text-[15px]'>Kixx Store foi um projeto voltado para uma loja de roupas do estilo "streetwear", onde o objetivo era ajudar pessoas a terem suas plataformas para divulgar seus projetos ou produtos. Realizei o sonho de amigos e foi muito gratificante ter alcançado esse resultado!</p>
                        <img className='rounded-md' src={Kixx} alt="" />
                        <a href='https://kixx-store.vercel.app' className='w-[50%] text-lg text-center text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg
                        max-md:w-[75%]
                        '>Acesse a Kixx!</a>
                    </div>

                    <div className='flex flex-col gap-5 w-[35%] h-auto bg-[#1c6697] p-5 items-center rounded-md
                    max-md:w-[95%]
                    '>
                        <h1 className='text-center text-2xl text-[#0EE6B7]'>Connect Health</h1>
                        <p className='text-white max-md:text-[15px]'>Nosso último e maior projeto desenvolvido no Instituto PROA! A Connect Health é uma multiplataforma que leva informações e consultas onlines com profissionais das áreas da psicologia e da nutrição, tudo isso por um preço acessível! Venha conhecer a Connect!</p>
                        <img className='rounded-md' src={Connect} alt="" />
                        <a href="https://connect-health.net.br" className='w-[50%] text-lg text-center target:"_blank" text-[#0EE6B7] bg-[#0b4164] p-1.5 rounded-lg
                        max-md:w-[75%]
                        '>Visite a Connect!</a>
                    </div>

                </div>
        </div>
    )
}
export default Project