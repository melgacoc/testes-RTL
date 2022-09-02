import React from 'react';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testa o componente About', () => {
  it('1-Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const info = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(info).toBeInTheDocument();
  });

  it('2-Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(title).toBeInTheDocument();
  });

  it('3-Testa se a página tem dois paragrafos', () => {
    renderWithRouter(<About />);

    const first = screen.getByText(/This application/i);
    const second = screen.getByText(/One can/i);
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
  });

  it('4-Testa se há uma imagem na página', () => {
    renderWithRouter(<About />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
