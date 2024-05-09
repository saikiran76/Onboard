/**
 * The parent container which has the About section, FAQs section and Footer as the children
 */



import Footer from "./Footer";
import About from "./about"
import FaContainer from "./facontainer"

const Container = () =>{
    return(
        <>
            <About/>
            <FaContainer/>
            <Footer/>
        </>
    )
}

export default Container;