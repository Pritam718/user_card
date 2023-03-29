import React, { useContext,useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext()
let API="https://reqres.in/api/users?page=1"

const initialState={
    data:[]
}

const AppProvider =({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

    const fecthApiData = async(url)=>{
        try{
            dispatch({type:"GET_LOADING"});
          const res= await fetch(url);
          const record= await res.json();
          console.log(record);
          dispatch({
            type:"GET_DATA",
            payload:{
                data:record.data
            }
          })
          
        }catch(e){
          console.log(e);
        }
     }

     const getData=()=>{
        fecthApiData(API);
     }

    // useEffect(()=>{
        
    //     fecthApiData(API);
    //  },[])
    return (
        <AppContext.Provider value={{...state,getData}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext} 