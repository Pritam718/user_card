const reducer=(state,action)=>{
    switch(action.type){
        case "GET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "GET_DATA":
            return{
                ...state,
                
                data:action.payload.data,
                isLoading:false,
                
                
            };
        default:{
            console.log(action.type )
        }
            
        
            
    }
    return state;
};

export default reducer;