import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dock from './Dock';

describe('<Dock />', () => {
  test('it should mount', () => {
    render(<Dock />);
    
    const dock = screen.getByTestId('Dock');

    expect(dock).toBeInTheDocument();
  });
});