import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  it('1-Testa e um card com as infos é renderizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    expect(history.location.pathname).toBe('/pokemons/25');

    const pokemon = screen.getByTestId(/pokemon-name/i);
    expect(pokemon).toBeInTheDocument();

    const type = screen.getByText('Electric', { selector: 'p' });
    expect(type).toBeInTheDocument();

    // const pokeWeight = '4.0 Kg';
    const wight = screen.getByText(/Average weight/i);
    expect(wight).toBeInTheDocument();

    const imageAlt = screen.getByAltText(/Pikachu sprite/i);
    expect(imageAlt).toBeInTheDocument();
    expect(imageAlt).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('2-Testa card do pokemon', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    // const { history } = renderWithRouter(<App />);
    // history.push('/pokemons/25');
    // expect(history.location.pathname).toBe('/pokemons/25');

    const checkFav = screen.getByRole('checkbox', { name: /favoritado/i });
    userEvent.click(checkFav);

    const favStarAlt = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(favStarAlt).toBeInTheDocument();
    expect(favStarAlt).toHaveAttribute('src', '/star-icon.svg');
  });
});
