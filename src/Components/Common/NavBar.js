import React from 'react';
import { useNavigate } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function NavBar() {
    
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate()
  
  return (
      <div>
          <Navbar color="primary" dark expand="md">
              <NavbarBrand href="/"><i className="fa-solid fa-id-card"></i>&nbsp;Contact Cloud</NavbarBrand>
              <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
              <Collapse isOpen={isOpen} navbar>
                  <Nav className="ms-auto text-primary" navbar>
                      <NavItem>
                          <NavLink className="text-white" href="#">Hi Haseeb Bhai</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="text-white" onClick={()=>navigate("/")}> 
                          <i className="fa-solid fa-right-from-bracket"></i>&nbsp;
                            {window.location.pathname == "/"?"LogIn":"LogOut"}</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
      </div >
  );
}

export default NavBar;