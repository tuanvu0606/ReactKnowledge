import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router,Link } from 'react-router-dom';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#3CB371'}
    const container = {height: 300}
    return(
      <div>

          <header>
          
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
            <MDBContainer>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <MDBNavbarBrand >
                  <strong>Home</strong>
              </MDBNavbarBrand>
              </Link>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                  <Link to={`/`} style={{ textDecoration: 'none' }}>
                      <MDBNavLink to="#">Contact us</MDBNavLink>
                      </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Options</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </header>
        <MDBContainer style={container} className="text-center mt-5 pt-5">
          <h2>Welcome to Linux</h2>
          <h5>It will always stay visible on the top, even when you scroll down</h5>
          <br/>
        </MDBContainer>
        
      </div>
    );
  }
}

export default FixedNavbarExample;