import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

function Header(){
    return(
        <div className='p-8 pl-10 flex justify-between'>
            <div className="flex gap-10">
                <button>Experiencias</button>
                <button>Projetos</button>
                <button>Contato</button>
            </div>
            <div className="flex gap-10">
                <AiFillGithub className='text-3xl'/>
                <AiFillLinkedin className='text-3xl'/>
                <AiFillInstagram className='text-3xl'/>
            </div>
        </div>
    )
}
export default Header