const initialState={
nameOfClient:""
};

export const clientInfoReducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case "INPUT_NAME":{
          let nameOfClient=state.nameOfClient;
          let nameRegEx=/([a-zA-Z])\w+/
          if(payload.match(nameRegEx)){nameOfClient=payload;
            console.log(nameOfClient); document.getElementById("name-warning").innerHTML=""; document.getElementById('clientName').disabled=true}else{nameOfClient=""; document.getElementById("name-warning").innerHTML="Name is invalid!"};
            return {...state, nameOfClient}
          
        }
        default:{
          return{...state};
        }
          }

}