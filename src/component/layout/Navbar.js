import React from "react";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Nav1 = () => {
  return (
    <div className="App tc f3">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav1;

// import React from "react";
// import "./Navbar.css";

// const Nav1 = () => {
//   // on Clicking Menu
//   const onClickMenu = () => {
//     document.getElementById("#menu").classList.toggle("icon");
//     document.getElementById("nav").classList.toggle("change");
//   };

//   return (
//     <div id="navigation">
//       <div id="menu" onClick={onClickMenu()}>
//         <div className="bar" id="bar1"></div>
//         <div className="bar" id="bar2"></div>
//         <div className="bar" id="bar3"></div>
//       </div>
//       <ul className="nav" id="nav">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Blog</a>
//         </li>
//         <li>
//           <a href="#">Gallery</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Nav1;
