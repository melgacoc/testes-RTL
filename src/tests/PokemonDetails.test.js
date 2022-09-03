import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente PokemonDetails', () => {
  it('1- Tes se as informações detalhadas são exibidas', () => {
    const { history } = renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    history.push('/pokemons/25');
    expect(history.location.pathname).toBe('/pokemons/25');

    const detailText = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(detailText).toBeInTheDocument();

    expect(details).not.toBeInTheDocument();

    const summaryText = screen.getByRole('heading',
      { name: /Summary/i, level: 2 });
    expect(summaryText).toBeInTheDocument();

    const desc = screen.getByText(/This intelligent Pokémon/i);
    expect(desc).toBeInTheDocument();

    const locationText = screen.getByRole('heading',
      { name: /Game Location/i, level: 2 });
    expect(locationText).toBeInTheDocument();

    const maps = screen.getAllByAltText(/Pikachu location/i);
    const viridianDesc = screen.getByText(/Viridian Forest/i);
    const powerPlantDesc = screen.getByText(/Power Plant/i);
    expect(viridianDesc).toBeInTheDocument();
    expect(maps[0]).toBeInTheDocument();
    expect(maps[0]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(powerPlantDesc).toBeInTheDocument();
    expect(maps[1]).toBeInTheDocument();
    expect(maps[1]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    const fav = screen.getByLabelText(/Pokémon favoritado/i);
    expect(fav).toBeInTheDocument();
  });
});
