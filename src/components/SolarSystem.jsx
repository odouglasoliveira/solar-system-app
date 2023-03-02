import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div className="solar-system" data-testid="solar-system">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
