import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Col,Row,Container,Input} from 'reactstrap';
import ContactCards from '../Cards/ContactCards';
import { add, addList } from '../Redux/Actions/ContactAction';
import ContactForm from '../Form/ContactForm';


export default function MainHome() {

    const Contactdata =useSelector((state)=>state.ContactReducer);
    debugger;
    const dispatch=useDispatch();

    let api ='https://dummyjson.com/users';

    const lodeApiData = async (url) =>{
      try {
        
        const res = await fetch(url);
        const data = await res.json();
        dispatch(addList(data.users))
        
      } catch (error) {
        console.log(error);
      }
    }
    
     useEffect(() => {
        debugger;
       lodeApiData(api)
     },[])

  return (
    <div>
    <Container fluid="lg">
          <Row>
            
            <Col expand="md" sm={12} md={6}>
            <ContactForm user={Contactdata.selectedUser}/>
            </Col>
            <Col expand="md" sm={12} md={6} id='cardcol'>

            <Input bsSize="sm" className='my-3' id="exampleFilter" name="Filter" placeholder="Filter" />

              {Contactdata.userArr.map((user)=><ContactCards key={user.id} user={user} />)}

            </Col>
          </Row>
        </Container>
    </div>
  )
}
