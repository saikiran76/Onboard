/**
 * The body component is dynamic based on routes and the
 * header section component remains intact (but its conditionally rendered based on routes for border styling and buttons)
 */

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
        </>

    )
}
export default Body;