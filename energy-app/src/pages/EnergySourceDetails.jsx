import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { energyData } from '../../data';

const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

const DetailSection = styled.section`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ImageSection = styled.div`
  display: flex;
  max-width: 800px;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    border-radius: 6px;
  }
`

function EnergySourceDetails() {
  const { id } = useParams();
  const sourceDetails = energyData.find(source => source.link === id);

  if (!sourceDetails) {
    return <div>Fonte de energia não encontrada.</div>;
  }

  return (
    <DetailsContainer>
      <BackButton to="/">← Voltar</BackButton>
      <h2>{sourceDetails.name}</h2>
      <ImageSection>
        <img src={sourceDetails.image} alt={sourceDetails.name} />
      </ImageSection>
      <DetailSection>
        <h3>Descrição</h3>
        <p>{sourceDetails.description}</p>
      </DetailSection>
      <DetailSection>
        <h3>Vantagens</h3>
        <ul>
          {sourceDetails.advantages.map((adv, index) => (
            <li key={index}>{adv}</li>
          ))}
        </ul>
      </DetailSection>
      <DetailSection>
        <h3>Desafios</h3>
        <ul>
          {sourceDetails.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </DetailSection>
      <DetailSection>
        <h3>Acesso Global</h3>
        <p>{sourceDetails.globalAccess}</p>
      </DetailSection>
    </DetailsContainer>
  );
}

export default EnergySourceDetails;