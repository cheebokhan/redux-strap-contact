
let id=0;

const initialState={isLoading:false,error:'',selectedUser:null,userArr:[],email:''}

const ContactReducer=(state=initialState,action)=>{
debugger;
    switch(action.type){
        case "EDIT-ON":
            {
                return{...state,  selectedUser:state.userArr.find(a=>a.id == action.payload) }
            }
        case "ADDLIST":
            {
                return{...state,  userArr:action.payload }
            }
        case "ADD":
        {
            ++id
            var arr = state.userArr;
            arr.push(action.payload);
            return{...state, 
                id:id,
                userArr:arr
            }
        }
     case "EDIT":
        {
            state.Editstate=false;
            var arr = state.userArr;
            var selected = arr.find(a=>a.id == action.payload.id);
            selected.firstName=action.payload.name;
            selected.email=action.payload.email;
            selected.phone=action.payload.phone;
            selected.contactType=action.payload.contactType;
            selected.image=action.payload.imgSrc;

            return {...state,userArr:[...arr]}

        }   

       case "DELETE":
        {
            var filteredrecord = state.userArr.filter((user)=>user.id!== action.Deleteid);
            return {...state,userArr:[...filteredrecord]}
        } 

        default:
            {
                return state;
            }
}
}

export default ContactReducer;