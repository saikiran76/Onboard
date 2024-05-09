/**
 * About section component
 */
import { Button } from "./button";

const About = () => {
    return (
      <div className="container flex flex-col">
        <div className="p-8 flex flex-col items-center">
          <h2 className="font-grace text-2xl text-green-500">Success Stories</h2>
          <h1 className="font-man font-semibold text-3xl p-2 w-[400px] text-center">
            Every success journey we’ve encountered.
          </h1>
        </div>
  
        <div className="flex-col md:flex md:flex-row lg:flex lg:flex-row">
          <div className="w-[100%] md:w-[50%] lg:w-[50%] picture-container relative">
            <div className="relative flex justify-center">
                <div className="relative">
                    <div className="image w-[50%] md:h-[18em] lg:h-[18em] overflow-hidden rounded-3xl ml-[14em] md:ml-[20em] lg:ml[20em] left-[5em]">
                        <img className="object-cover hover:object-scale-down" src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__" alt="abt"/>
                    </div>
                    <div className="rounded-2xl absolute top-[70px] right-[16em] bg-gray-100 p-3">
                        <h1 className="font-man text-2xl font-semibold w-[2em]">40%</h1>
                        <p className="text-xs font-man w-[10em]">Achieved reduction in project execution time by optimising team availability</p>

                    </div>
                        <div className=" flex flex-row justify-start items-center gap-3.5 w-[160px] h-[51px] pl-[12.73px] pr-[30.73px] py-[12.73px] rounded-[111.54px] box-border  bg-[rgba(255,255,255,1)] shadow-[0px_15.21px_35.49px_0px_rgba(0,0,0,0.09)] absolute top-[230px] right-[15em]">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/o1i06ny9ne8-162%3A219?alt=media&token=2fe564e4-b159-4c31-b713-27b6f99f9195"
                                alt="Not Found"
                                className=" w-[32px] h-[32px]"
                            />
                        <div className="flex flex-col justify-center items-start gap-0.5 h-[2em] box-border">
                            <p className="border-[#1c1c1cff] text-base leading-6 font-man font-[700] uppercase">
                            10 days
                            </p>
                            <p className="border-[#828282ff] text-[0.5rem] leading-[130%]  font-man  font-[400]">
                            Staff Deployment
                            </p>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-start items-start gap-2 w-[160.49px] h-[110px] pl-[30px] pr-[27.64px] pt-[25.64px] pb-[37.64px] border-[1.18px]  border-[#3d3d3dff] border-solid rounded-[25.36px] box-border  bg-[rgba(0,46,24,1)] shadow-[0px_23.63px_37.81px_0px_rgba(30,30,30,0.09)] absolute top-[230px] right-[3em]">
                        <div className=" flex flex-row justify-end gap-[8px] w-[100%] box-border">
                            <p className="border-[#ffffffff] text-white  text-2xl  leading-[120%] font-man  font-[500]  tracking-[-1.9px]">
                            $0.5
                            </p>
                            <p className="text-[#a6a3a0ff] pt-2  leading-[140%]  font-man  font-[450] text-  tracking-[0.23px] uppercase">
                            million
                            </p>
                        </div>
                        <p className="border-[#ccccccff] text-[#a6a3a0ff] text-[0.54rem]  leading-[130%]  font-man  font-[500]">
                            Reduced client expenses by saving on hiring and employee costs.
                        </p>
                    </div>

                    
                </div>

            </div>
            
          </div>
          <div className="w-[50%] description-container p-16">
            <h1 className="font-man font-semibold w-[12em] text-xl">
            Enhance fortune 50 company’s insights teams research capabilities

            </h1>
            <div className="mt-10">
                <Button name="Explore More" bgColor="bg-gray-800" textColor="text-white" vis="block"/>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  

  //<div className="rounded-3xl absolute top-[230px] right-[24em] bg-gray-100 p-2 w-[8.5em] ">
//   <div className="time flex gap-2">
//   {/* <IoRocketSharp /> */}
//   <div>
//       <p className="font-bold text-sm font-man w-[em]">10 DAYS</p>
//       <p className="font-man text-xs mt-1">
//           Staff Deployment
//       </p>
//   </div>
// </div>

// </div>