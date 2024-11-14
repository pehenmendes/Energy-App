import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #4CAF50;
  padding: 1rem;
  color: white;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <HeaderTitle>Acesso Universal à Energia</HeaderTitle>
      </NavLink>
    </HeaderContainer>
  );
}

export default Header;