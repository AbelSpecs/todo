import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Participants from './Participants';

describe('<Participants />', () => {
  test('it should mount', () => {
    render(<Participants />);
    
    const participants = screen.getByTestId('Participants');

    expect(participants).toBeInTheDocument();
  });
});