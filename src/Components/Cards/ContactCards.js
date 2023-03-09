import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Card, CardBody, CardText, CardTitle, Col, Row  } from 'reactstrap';
import { Deleteuser, Editon } from '../Redux/Actions/ContactAction';


export default function ContactCards(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate();


  return (
    <div>
<Card color='light' className='m-2'>
    <Row>
        <Col xs='8'>
        <CardBody className='text-start'>
            <CardTitle tag='h2' className='text-primary'>
                {props.user.firstName}
                </CardTitle>
            <CardText tag='p' >
                {props.user.email}
                </CardText>
            <CardText tag='p' >
                {props.user.phone}
                </CardText>
            <Button 
            onClick={()=>dispatch(Editon(props.user.id))} 
            color="secondary" >Edit</Button>
            <Button
             onClick={()=>dispatch(Deleteuser(props.user.id))} 
             color="danger">Delete</Button>
        </CardBody>
        </Col>
        <Col xs='4'>
            <CardBody className='text-end mx-3' >
                <Button color='success'>Personal</Button>

                <img className='m-2 image-fluid rounded-start' width='100' height='100'
                 src={props.user.image} 
                onClick={()=>navigate(`/userdetails/${props.user.id}`)}
                ></img>

            </CardBody>
        </Col>
    </Row>
</Card>

    </div>
  )
}
