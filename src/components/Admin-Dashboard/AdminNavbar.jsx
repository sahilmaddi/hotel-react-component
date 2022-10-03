import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
export default function AdminNavbar() {
   const [showNavCentred, setShowNavCentred] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
                Dropdown
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Rooms</MDBDropdownItem>
                <MDBDropdownItem link>Resorts</MDBDropdownItem>
                <MDBDropdownItem link>Food</MDBDropdownItem>
                <MDBDropdownItem link>Facilities</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
          </MDBNavbarItem>
          </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>

   
  );
};
