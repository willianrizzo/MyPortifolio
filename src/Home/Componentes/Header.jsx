import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'



function Header() {
    return (
        <div className='p-8 pl-20 flex justify-between text-[#dfdede]
        max-md:pl-5 max-md:pb-0
        '>
            <AiOutlineMenu className='hidden
            max-md:flex max-md:text-[25px]
            '/>
            <div className="flex gap-10
            max-md:hidden
            ">
                <a>Experiencias</a>
                <a>Projetos</a>
                <a href='../../assets/Curriculo_Willian.pdf' download>Meu Currículo</a>
            </div>
            <div className="flex gap-6 mr-6
            max-md:hidden
            ">
                <a href="https://github.com/willianrizzo"> <AiFillGithub className='text-3xl' /> </a>
                <a href="https://www.linkedin.com/in/willianrizzo/"> <AiFillLinkedin className='text-3xl' /></a>
                <a href="https://www.instagram.com/wiurizzo/"> <AiFillInstagram className='text-3xl' /></a>
            </div>
        </div>
    )
}
export default Header