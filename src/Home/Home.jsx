import Bghome from "./Componentes/Bghome"
import Header from "./Componentes/Header"
import Section from "./Componentes/Section"

function Home() {
    return (
        <>
            <div className="h-auto pb-24">
                <Header />
                <Bghome />
                <Section />
            </div>
        </>
    )
}
export default Home