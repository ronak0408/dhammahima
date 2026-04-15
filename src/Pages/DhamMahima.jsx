import Navbar from "../Components/Navbar";
import DhamGrid from "./DhamGrid";

export default function DhamMahima() {
  return (
    <>
      <Navbar className="bg-black" />

      {/* Background Section with overlay */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
      
          }}
        ></div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-orange-400/60 "></div> */}

        {/* Content */}
        <div className="relative z-10 ">
         
          <div className="mt-1 w-full">
             
            <DhamGrid />
          </div>
        </div>
      </div>
    </>
  );
}
