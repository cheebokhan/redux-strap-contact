
const initialState={Editstate:false,Editid:0};
const EditReducer=(state=initialState,action)=>{
    switch(action.type){
        case "EDIT-ON":
            {
                return {
                    Editstate:true,
                    Editid:action.payload.Editid,
                }
            }
        case "EDIT-OFF":{
            return {
                Editstate:false,
                Editid:0,
            }
        }
       default:
        {
            return state
        } 

    }

}

export default EditReducer;