import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se o topo da aplicação contém um conjunto de links de navegação', () => {
  it('1-Testa se há links com os textos no topo da navegação', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favPokes = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favPokes).toBeInTheDocument();
  });

  it('2-Testa se redireciona para a págna correta ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('3-Testa se redireciona para a págna correta ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });

    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('4-Testa se  redireciona para a págna correta ao clicar em Favorite Poémons', () => {
    const { history } = renderWithRouter(<App />);
    const favPokes = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(favPokes);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('5-Testa se redireciona a pagina NotFound quando um link não for válido', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/invalidUrl');

    const invalid = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });

    expect(invalid).toBeInTheDocument();
  });
});
