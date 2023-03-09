import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Button } from 'reactstrap'

export default function UserInfo() {

    const navigate = useNavigate();
    let {id} = useParams()
    console.log(id + "prem")
    const Contactdata = useSelector((state)=> state.ContactReducer)
    let selectedUser =Contactdata.userArr.find((user)=> user.id == id )
    console.log(selectedUser);
    debugger;
  return (
    <div>
        <img src={selectedUser.image} alt=''></img>
        <h1>{selectedUser.firstName}</h1>
        <p>{selectedUser.email}</p>
        <p>{selectedUser.phone}</p>
        <Button onClick={()=>navigate(-1)}> Go Back </Button>

    </div>
  )
}
