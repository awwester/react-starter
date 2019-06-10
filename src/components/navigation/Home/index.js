import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

class HomeNav extends React.Component {
  state = { isOpen: false }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar className="landing-navbar" expand="md" fixed="top">
        <NavbarBrand>
          <FontAwesomeIcon icon={faHome} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={() => toast('There are none yet.')}>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <Button
                className="px-3"
                color="primary"
                outline
                onClick={() => this.props.history.push('/auth/login')}
              > Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}


export default withRouter(HomeNav);
