/**
 * The footer section 
 */


import { MdCopyright } from "react-icons/md";


const Footer = () =>{
    return(
        <div className="bg-[#F5F5F5] w-[90%] md:w-[1200px] lg:md-[1200px] flex flex-col items-center gap-6 md:flex-row md:justify-between m-4 rounded-2xl p-10 mx-auto">
            <div className="flex gap-2 items-center">
                <MdCopyright/>
                <p className="font-man text-sm">Talup 2023. All rights reserved</p>
            </div>

            <div className="flex gap-8">
                <p className="font-man text-sm">Terms & Conditions</p>    
                <p className="font-man text-sm">Privacy Policy</p>
            </div>
        </div>

    )
}

export default Footer;