/**
 * Conditionally rendering Header component based on the route
 */

import { Button } from "./button";
import { IoIosCloseCircleOutline } from "react-icons/io";
import '../App.css'
import img from '../Vector.png'
import { Link, useLocation } from "react-router-dom";

const Header = () =>{
    const location = useLocation();

    return(
        <div className={`p-4 flex justify-between rounded-[3em] ${location.pathname === '/' ? 'border-zinc-300 border-b border-t border-l border-r' : ''} mx-2 my-2`}>
            <div className="logo m-4">
                <img src={img} className="w-[90%]" alt="logo"/>
                
            </div>

            {location.pathname === '/' ? (
                <div className="buttons m-2 flex gap-2">
                    <Link to="/signup">
                        <Button name="Get Projects" bgColor={"bg-gray-100"} textColor="text-zinc-700" />
                    </Link>
                    <Button name="Onboard Talent" bgColor="bg-gray-900" textColor="text-zinc-200" />
                </div>
            ) : (
                <Link to="/" className="flex items-center">
                    <div className="mr-6">
                    <IoIosCloseCircleOutline style={{width:"110%"}}/>
                    </div>
                </Link>
            )}

                </div>
            )
}

export default Header;