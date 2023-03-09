import React, { useState , useEffect} from 'react';
import {Form , Input, Button, Label, FormGroup} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Editoff,edit,add } from '../Redux/Actions/ContactAction';




export default function ContactForm(props) {


  const[name , setName] = useState('')
  const[email , setEmail] = useState('')
  const[phone , setPhone] = useState('')
  const[contactType , setContactType] = useState('Personal')
  const[imgSrc , setimgsrc] = useState('')
  const dispatch = useDispatch();

  const Contactdata=useSelector((state)=>state.ContactReducer);
  const Editdata=useSelector((state)=>state.EditReducer);

debugger;

  let selectedUser =Contactdata.selectedUser;//.find((user)=> user.id === Editdata.editid );


  useEffect(()=>{
    if(selectedUser){
      setName(selectedUser.firstName);
      setEmail(selectedUser.email);
      setPhone(selectedUser.phone);
      image = document.getElementById('output');
      setimgsrc(selectedUser.image);
      image.src=(selectedUser.image);
    }
  },[props])


  var image 
  var loadFile = function(e) {
      image = document.getElementById('output');
      image.src = URL.createObjectURL(e.target.files[0]);
      setimgsrc(URL.createObjectURL(e.target.files[0]))
  }

  function ContactData(){

    let nameREGX =/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    let nameResult = true;//nameREGX.test(name);
  
    let emailREGX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let emailResult =true;// emailREGX.test(email);
    
    let phoneREGX = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let phoneResult =true;// phoneREGX.test(phone);

    // if(nameResult === true){
    //   if(emailResult === true){
    //       if(phoneResult === true)
    //       {
              if(selectedUser)
              {
                  dispatch(edit(selectedUser.id,name,email,phone,contactType,imgSrc))
                  dispatch(Editoff())

              }else
              dispatch(add(name,email,phone,contactType,imgSrc));

  //         }else alert("Please confirm your Contact is correct")
  //     }else alert("Please confirm your Email is correct")
  // }else alert("Please confirm your Name is correct")   
  console.log(Contactdata)
  }

  return (
    <div>
      <h3 className='text-primary my-3'><b>Add Contact</b></h3>
      <Form>
        <Input bsSize='sm' className='mt-2' value={name} onChange={(e)=>setName(e.target.value)} id="exampleName"
        name='name' placeholder='Enter Your Name' type='text'/>
        <Input bsSize='sm' className='mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} id="exampleEmail"
        name='email' type='email' placeholder='please enter your Email'/>
        <Input bsSize='sm' className='mt-2' value={phone} onChange={(e)=>setPhone(e.target.value)} id="examplePhone"
        name='phone' type='text' placeholder='please enter your Phone number'/>
        <h6 className='text-start my-2'>Contact Type</h6>
        <div className='text-start'>
          <FormGroup check inline >
            <Input name='radiobtn' value="Personal" onChange={(e)=>setContactType(e.target.value)}
             type="radio" defaultChecked/>
             <Label check>Personal</Label>
          </FormGroup>
          <FormGroup check inline >
                    <Input name="radiobtn" value="Professional" onChange={(e) => setContactType(e.target.value)} type="radio"/>
                    <Label check>Professional</Label>
                </FormGroup>
        </div>
        <Input className='my-3' bsSize='sm' onChange={(e)=>{loadFile(e)}} id="files" type='file'/>
        <img id="output" width="300" className='  my-4 d-block mx-auto img-fluid' alt=''/>
        {selectedUser? <Button onClick={()=>ContactData()} block color="primary" size="sm">Update Contact</Button>:
            <Button onClick={()=>ContactData()} block color="primary" size="sm">Add Contact</Button>}
      </Form>
    </div>
  )
}

