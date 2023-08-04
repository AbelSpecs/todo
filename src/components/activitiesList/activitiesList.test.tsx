import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActivitiesList from './ActivitiesList';

describe('<ActivitiesList />', () => {
  test('it should mount', () => {
    render(<ActivitiesList />);
    
    const activitiesList = screen.getByTestId('ActivitiesList');

    expect(activitiesList).toBeInTheDocument();
  });
});