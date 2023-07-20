import Bghome from "./Componentes/Bghome"
import Contact from "./Componentes/Contact"
import Header from "./Componentes/Header"
import Section from "./Componentes/Section"


function Home() {
    return (
        <>
            <div className="h-auto pb-24 max-md:w-[65%]">
                <Header />
                <Bghome />
                <Section />
                <Contact/>
            </div>
        </>
    )
}
export default Home