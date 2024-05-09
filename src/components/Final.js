/**
 * 
 * Success page for successful login
 */

const Final = () =>{
    return(
        <div className="flex flex-col items-center justify-center mt-12">
            <img className="w-[5%]" src="https://cdn3.iconfinder.com/data/icons/round-default/64/add-512.png" alt="success"/>
            <h2 className="font-grace text-green-500 text-xl text-center mt-8">
            Success submitted
            </h2>
            <h1 className="font-man mt-2 text-black font-semibold text-3xl md:text-4xl text-center w-[55%]">
            Congratulations
            </h1>
            <p className="font-man text-gray-600 mt-4 w-[17em] md:w-[25em] ml-4 md:ml-0">
                Your request has been successfully submitted to us. We will validate your information and reach out to your <span className="text-center">shortly with updates</span>

            </p>
        </div>
    )
}

export default Final;