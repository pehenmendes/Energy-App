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
  border-radius: 8px;
  margin-bottom: 1rem;
  line-height: 1.6;
`

const IntroImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 95%;
    border-radius: 6px;
  }
`

function HomePage() {
  return (
    <HomeContainer>
      <IntroText>
        <h2>Acesso Universal à Energia</h2>
        <p>As fontes de energia renováveis, como solar, eólica, hidrelétrica, biomassa e geotérmica, são essenciais para um futuro sustentável, pois se regeneram naturalmente e não esgotam os recursos do planeta. Ao contrário dos combustíveis fósseis, elas causam um impacto ambiental menor e ajudam a reduzir as emissões de gases de efeito estufa, o que é fundamental para enfrentar as mudanças climáticas. A adoção dessas fontes protege ecossistemas, preserva a biodiversidade e melhora a qualidade de vida em todo o mundo.</p>
        <IntroImage>
          <img src='https://www.futurosolar.com.br/wp-content/uploads/2018/10/energia-renovavel.jpg' alt='fontes de energia sustentáveis'/>
        </IntroImage>
        <p>Essas energias desempenham um papel decisivo no desenvolvimento de comunidades, especialmente em regiões remotas e carentes, onde o acesso à eletricidade transforma a vida das pessoas. Com energia renovável, hospitais, escolas e residências podem contar com um fornecimento estável e seguro, promovendo a educação, a saúde e a segurança, além de impulsionar a economia local. Esse acesso melhora a infraestrutura e permite que essas comunidades avancem com mais oportunidades e qualidade de vida.</p>
        <p>Incentivar o uso de energias renováveis é investir em um mundo mais justo e sustentável para as próximas gerações. Ao escolher fontes de energia limpa, cada pessoa e comunidade contribui para um planeta mais saudável e equitativo. Além disso, a expansão dessas fontes gera empregos e fomenta o desenvolvimento econômico, ajudando a reduzir desigualdades e proporcionando novas perspectivas de trabalho em todas as regiões.</p>
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