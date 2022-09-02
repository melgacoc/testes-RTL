import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  it('1-Testa e a página contém um componente h2', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  it('2-Testa se é exibido o próximo pokemon', () => {
    renderWithRouter(<App />);

    const crrPokemon = screen.getByText(/Pikachu/i);
    expect(crrPokemon).toBeInTheDocument();

    const nextButton = screen.getByText(/Próximo pokémon/i);
    userEvent.click(nextButton);

    const nextPokemon = screen.getByText(/Charmander/i);
    expect(nextPokemon).toBeInTheDocument();
  });

  // it('3-Testa se somente 1 pokémon é exibido por vez', () => {
  // renderWithRouter(<App />);

  // const crrPokemon = getAllByTestId(/pokemon-name/i);
  // expect(crrPokemon.length).toBe(1);
  // });

  it('4-Testa se a Pokédex tem o botões de filtro', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByText(/All/i);
    expect(allButton).toBeInTheDocument();

    const magicNumber = 7;
    const filterButtons = screen.getAllByTestId(/pokemon-type-button/i);
    expect(filterButtons).toHaveLength(magicNumber);

    const crrPokemon = screen.getByText(/Pikachu/i);
    expect(crrPokemon).toBeInTheDocument();

    const poisonButton = screen.getByRole('button', { name: /poison/i });
    userEvent.click(poisonButton);
    const poisonPokemon = screen.getByText(/Ekans/i);
    expect(poisonPokemon).toBeInTheDocument();

    userEvent.click(allButton);
    expect(crrPokemon).toBeInTheDocument();
  });
});
