import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
// import FavoritePokemons from '../pages/FavoritePokemons'
import App from '../App';

describe('Testa o componente FavoritePokemons', () => {
  it('Testa se é exibida a mensagem No favorite pokemon', () => {
    renderWithRouter(<App />);

    const favPokes = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favPokes);

    const message = screen.getByText(/pokemon found/i);
    expect(message).toBeInTheDocument();
  });

  it('Testa se são exibidos os cards favoritados', () => {
    renderWithRouter(<App />);

    const favPokes = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favPokes);
    const message = screen.getByText(/pokemon found/i);
    expect(message).toBeInTheDocument();

    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);

    const details = screen.getByRole('link', { name: /more details/i});
    userEvent.click(details);

    const checkFav = screen.getByRole('checkbox', { name: /favoritado/i});
    userEvent.click(checkFav);

    userEvent.click(favPokes);
    expect(message).not.toBeInTheDocument();
  });
});
