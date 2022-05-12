import ButtonCommon from 'components/Button';
import InputField from 'components/CustomField/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const menuNavBar = [
  {
    path: '/home',
    title: 'Home',
    icon: '',
  },
  {
    path: '/pages',
    title: 'Pages',
    icon: '',
  },
  {
    path: '/products',
    title: 'Products',
    icon: '',
  },
  {
    path: '/blog',
    title: 'Blog',
    icon: '',
  },
  {
    path: '/shop',
    title: 'Shop',
    icon: '',
  },
  {
    path: '/contact',
    title: 'Contact',
    icon: '',
  },
];

const NavBar = () => {
  return (
    <Formik
      initialValues={{ search: '' }}
      validate={(values) => {}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form>
          <Row className="navbar-container" noGutters>
            <Col xs="12" md="1"></Col>
            <Col xs="12" md="10" className="navbar-container__content ">
              <span className="navbar-container__content_label">PetChan</span>
              <div className="navbar-container__content_items">
                {menuNavBar.map((el) => {
                  return (
                    <Link key={el.path} to={el.path} className="navbar-container__content_items-title">
                      {el.title}
                      {/* <AkarIconsChevrondown /> */}
                    </Link>
                  );
                })}
              </div>
              <div className="navbar-container__content_search">
                <div className="text">
                  <FastField
                    className="form-control"
                    name="search"
                    components={InputField}
                    placeholder="Search"
                    type="input"
                  />
                  <div className="button-common">
                    <ButtonCommon outline color="pink">
                      <SearchIcon />
                    </ButtonCommon>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" md="1"></Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
export default NavBar;
