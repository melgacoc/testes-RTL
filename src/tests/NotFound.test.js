import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Not Found', () => {
  it('Testa se a págna contém um heading h2', () => {
    renderWithRouter(<NotFound />);

    const invalid = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(invalid).toBeInTheDocument();
  });

  it('Testa se a página reenderiza imagem', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole('img', { name: /Pikachu crying/i });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
