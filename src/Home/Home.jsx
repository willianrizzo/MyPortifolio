import Bghome from "./Componentes/Bghome"
import Contact from "./Componentes/Contact"
import Header from "./Componentes/Header"
import Section from "./Componentes/Section"
import Technologies from "./Componentes/Technologies"


function Home() {
    return (
        <>
            <div className="h-auto pb-24 max-md:w-[64%]">
                <Header />
                <Bghome />
                <Section />
                <Technologies/>
                <Contact/>
            </div>
        </>
    )
}
export default Home