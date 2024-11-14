import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Acesso Universal à Energia. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;