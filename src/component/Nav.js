import React from "react";
import { useGlobalContext } from "../contex";

const Nav = () => {
  const { data, getData,isLoading } = useGlobalContext();
  
  if (isLoading){
    return(
        <>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold ">Loading...</h1>
          </div>
        </>
    )
  }
  else{

  return (
    <>
      <div className="">
        <nav className="bg-red-300 border-gray-200 px-2 mx-5  sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://letsgrowmore.in/" className="flex items-center">
              <img
                src="https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg"
                className="h-6 mr-3 sm:h-9"
                alt="LGM Logo"
              />
              <span className="self-center text-3xl font-semibold font-serif text-black">
                Lets Grow More
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={getData}
              >
                Get DATA
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >

            </div>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-3 gap-2 my-3  place-items-center ">
        
        {data.map((curpost) => {
          const { email, first_name, last_name, avatar } = curpost;

          return (
            <>
              
                <div className="bg-gray-900 w-96 h-full rounded-lg mt-2 p-5">
                  
                  <div className="flex gap-5">

                    <div className="my-10">
                    <div className="flex gap-2">
                    <h1 className="text-2xl text-gray-200">{first_name}</h1>
                    <p className="text-2xl text-gray-200">{last_name}</p>
                    </div>
                    <a href={email}>
                    <h1 className="text-gray-200 ">{email}</h1>
                    </a>
                    
                    </div>
                  
                    
                    
                    
                    <img src={avatar} alt="avata" className="mt-6 rounded-full"/> 
                    </div>
                    
                    
                  
                </div>
              
            </>
          );
        })}
      </div>
    </>
  );
      }
};


export default Nav;
