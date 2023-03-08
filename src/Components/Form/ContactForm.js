import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,
  
  
} from 'reactstrap';



function ContactForm(){

return(
<>
<Row>
    <Col className='sm-6'>
        <h2 style={{color:'blue'}}>Cloud Contact</h2>
<Form className='mx-3 my-2'>
  <FormGroup>
    <Label for="examplname">
      Name
    </Label>
    <Input
      id="exampleName"
      name="name"
      placeholder="with a placeholder"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleemail">
      Email
    </Label>
    <Input
      id="exampleemail"
      name="email"
      placeholder="Enter Your Email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleemail">
      Phone
    </Label>
    <Input
      id="examplephone"
      name="phone"
      placeholder="Enter Your Number"
      type="text"
    />
  </FormGroup>


  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
  </FormGroup>

  <FormGroup
    check
    inline
  >
    <Input type="radio" />
    <Label check>
      Some input
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="radio" />
    <Label check>
      Some other input
    </Label>
  </FormGroup>
  <br/><br/>
  <Button block color="primary" size="sm">
    Submit
  </Button>
</Form>
</Col>
<Col className='sm-6'>
    <h1>pakistan is </h1>
</Col>
</Row>
</>

)}

export default ContactForm;