import ExperienciaDois from './Styled/ExperienciaDois'
import ExperienciaUm from './Styled/ExperienciaUm'


import Project from './Styled/Project'

function Section() {
    return (
        <div>
            <div className="mt-52">
                <div className="W-full text-center ">
                    <h3 className="text-3xl text-[#0EE6B7]">Minhas experiências</h3>
                </div>


                <div className=" flex flex-col gap-20 mt-[65px] ">
                    <ExperienciaUm/>
                    <ExperienciaDois/>
                </div>
                
                <div className="W-full text-center mt-52 ">
                    <h3 className="text-3xl text-[#0EE6B7]">Meus Projetos</h3>
                </div>

                <Project/>
            </div>
        </div>
    )
}
export default Section