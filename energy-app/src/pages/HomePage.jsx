import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { energyData } from '../../data';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const EnergySourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const EnergySourceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    border-radius: 6px;
  }
`;

const IntroText = styled.div`
  background-color: #e7f3e8;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  line-height: 1.6;
`

function HomePage() {
  return (
    <HomeContainer>
      <IntroText>
        <p>As fontes de energia renováveis são fundamentais para um futuro mais sustentável e acessível para todas as comunidades ao redor do mundo. Diferente das fontes tradicionais, como os combustíveis fósseis, as energias renováveis — solar, eólica, hidrelétrica, biomassa e geotérmica — são recursos naturais que se regeneram continuamente, permitindo sua utilização sem esgotar os recursos da Terra.</p>
        <p>A importância dessas fontes vai além da questão ambiental: elas também desempenham um papel crucial no desenvolvimento econômico e social, especialmente em comunidades carentes e em regiões remotas. A energia renovável pode transformar a vida das pessoas ao permitir acesso a eletricidade confiável, o que impulsiona a educação, melhora o atendimento de saúde, aumenta a segurança e estimula a economia local. Em escolas e hospitais, por exemplo, a presença de uma energia constante e limpa significa um ensino mais eficaz e melhores condições de atendimento, salvando vidas e promovendo o bem-estar.</p>
        <p>Além disso, a adoção das energias renováveis ajuda a mitigar as mudanças climáticas, reduzindo a emissão de gases de efeito estufa e o impacto ambiental. Isso é vital para proteger ecossistemas, reduzir eventos climáticos extremos e preservar a biodiversidade — questões que afetam diretamente a qualidade de vida humana e a segurança alimentar. A geração de empregos nas indústrias de energia limpa também fortalece a economia, ao mesmo tempo em que ajuda na redução de desigualdades, oferecendo oportunidades de trabalho para homens e mulheres em todas as regiões do mundo.</p>
        <p>Por isso, conscientizar e incentivar o uso das energias renováveis é um passo essencial para construir um planeta mais saudável e equitativo. Ao escolher fontes de energia limpa, estamos investindo em um mundo mais justo e sustentável para as gerações atuais e futuras.</p>
        <p>Explore as diferentes fontes abaixo e descubra como cada uma pode transformar vidas e proteger nosso planeta.</p>
      </IntroText>
      <h2>Fontes de Energia Renovável</h2>
      <EnergySourceGrid>
        {energyData.map((source) => (
          <Link to={`/source/${source.link}`} key={source.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <EnergySourceCard>
              <img src={source.image} alt={source.name} />
              <h3>{source.name}</h3>
              <p>Clique para mais detalhes</p>
            </EnergySourceCard>
          </Link>
        ))}
      </EnergySourceGrid>
    </HomeContainer>
  );
}

export default HomePage;