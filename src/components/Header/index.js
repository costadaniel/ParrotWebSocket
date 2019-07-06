import React from 'react';
import PropTypes from 'prop-types';

import { Container, HeaderTitle } from './styles';

const Header = ({ title }) => (
  <Container>
    <HeaderTitle>{title}</HeaderTitle>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
