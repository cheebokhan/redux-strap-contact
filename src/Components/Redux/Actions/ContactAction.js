import {
    type
} from "@testing-library/user-event/dist/type"

export const addList = (list) => {
    return {
        type: "ADDLIST",
        payload: list
    }
}

export const add = (name, email, phone, imgSrc, contactType) => {
    return {
        type: "ADD",
        payload: {
            name: name,
            email: email,
            phone: phone,
            contactType: contactType,
            imgSrc: imgSrc
        }
    }
}

export const edit = (id, name, email, phone, contactType, imgSrc) => {
    return{
    type: "EDIT",
    payload: {
        id: id,
        name: name,
        email: email,
        phone: phone,
        contactType: contactType,
        imgSrc: imgSrc
    }
}
}

export const Editon = (id) => {
    
    return{
        type:"EDIT-ON",
        payload:id
    }
}

export const Editoff = () => {
    
    return{
        type:"EDIT-OFF"
    }
}

export const Deleteuser = (id) => {
    return{
        type:"DELETE",
        Deleteid:id
    }
}