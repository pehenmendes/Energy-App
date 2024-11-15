import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

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
        <HeaderTitle>  EcoVolt <MdOutlineEnergySavingsLeaf /></HeaderTitle>
      </NavLink>
    </HeaderContainer>
  );
}

export default Header;