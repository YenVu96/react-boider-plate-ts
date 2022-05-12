import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SendEmailIcon } from '../../assets/send-email.svg';
import { ReactComponent as HeartIcon } from '../../assets/heartIcon.svg';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import DropdownCommon from 'components/DropdownCommon';
import { Col, Row } from 'reactstrap';
import Button from 'components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuContact = [
  {
    path: '/',
    label: 'Language',
    value: 'Vietnamese',
  },
];
const Information = () => {
  //! State
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //! Effect

  //! Function
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //! Render
  return (
    <Row className="information-container" noGutters>
      <Col xs="12" md="6" className="information-container_contact">
        <Link to="petchan@gmail.com">
          <SendEmailIcon />
          petchan@gmail.com
        </Link>
        <Link to="/">
          <PhoneIcon /> 0975006298
        </Link>
      </Col>
      <Col xs="12" md="6" className="information-container_setting">
        <Link to="/">
          <DropdownCommon isOpen={dropdownOpen} toggle={toggleDropdown} label="English" value="Vietnamese" />{' '}
        </Link>
        <Link to="/">
          <DropdownCommon isOpen={dropdownOpen} toggle={toggleDropdown} label="USD" value="Dollar" />{' '}
        </Link>
        <Link to="/" className="wishlist">
          Wishlist <HeartIcon />
        </Link>
        <Link to="/">
          <ShoppingIcon />{' '}
        </Link>
      </Col>
    </Row>
  );
};
export default Information;
