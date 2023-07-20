import ExperienciaDois from './Styled/ExperienciaDois'
import ExperienciaUm from './Styled/ExperienciaUm'


import Project from './Styled/Project'

function Section() {
    return (
        <div>
            <div className="mt-52 max-md:mt-32  ">
                <div className="w-full text-center max-md:flex max-md:justify-center max-md:w-[154%] max-md:m-auto ">
                    <h3 className="text-3xl text-[#0EE6B7]
                    max-md:text-2xl
                    ">Minhas experiências</h3>
                </div>


                <div className=" flex flex-col gap-20 mt-[65px]
                max-md:gap-10
                ">
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