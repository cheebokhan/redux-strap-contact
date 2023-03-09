import React from 'react'
import { useNavigate } from 'react-router';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function Login() {
  const navigate = useNavigate();


  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6 mt-5">
      <Form>
            <FormGroup className="text-left ">
              <Input type="email" name="email" id="Email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="Password" placeholder="Password" />
            </FormGroup>
            <Button onClick={()=>navigate("/home")}>Submit</Button>
          </Form>

      </div>
    </div>


   
  )
}
