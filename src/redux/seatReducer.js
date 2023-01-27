const initialState={ selectedSeatList: [], total:0};

export const seatReducer = (state = initialState, action)=>{
  const {type, payload}= action;
  switch(type){
case "SELECT_SEAT":{
  let selectedSeatList=[...state.selectedSeatList];
  let total = state.total;
  for(let i =0; i<selectedSeatList.length; i++){
    if(selectedSeatList[i].soGhe==payload.soGhe){
      total-=selectedSeatList[i].gia;
    selectedSeatList.splice(i,1);
      
    return {...state, selectedSeatList, total};}
  }
  selectedSeatList.push(payload);
  total=0;
  for(let k =0; k<selectedSeatList.length; k++){
    total+=selectedSeatList[k].gia};
  
    return {...state, selectedSeatList, total}
}
default:{
  return{...state};
}
  }
}