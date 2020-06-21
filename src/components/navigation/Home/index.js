import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const { Brand, Toggle, Collapse } = Navbar;
const { Item, Link } = Nav;

class HomeNav extends React.Component {
  state = { isOpen: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar className="landing-navbar" expand="md" fixed="top">
        <Brand>
          <FontAwesomeIcon icon={faHome} />
        </Brand>
        <Toggle onClick={this.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </Toggle>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Item>
              <Link onClick={() => toast("There are none yet.")}>Features</Link>
            </Item>
            <Item>
              <Link>Pricing</Link>
            </Item>
            <Item>
              <Link>Contact</Link>
            </Item>
            <Item className="ml-5">
              <Button
                className="px-3"
                color="primary"
                outline
                onClick={() => this.props.history.push("/auth/login")}
              >
                {" "}
                Login
              </Button>
            </Item>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(HomeNav);
