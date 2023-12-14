import React from 'react';
import '@testing-library/jest-dom';

import BestHomesSection from '../best.component';
import { render, screen } from '@testing-library/react';


describe('BestHomesSection', () => {
  it('should render the component correctly', () => {
    render(<BestHomesSection />)
    expect(screen.getByText('The best homes.')).toBeInTheDocument();
    expect(screen.getByText('Air Conditioning')).toBeInTheDocument();
    expect(screen.getByText('Safe & Secure')).toBeInTheDocument();
    expect(screen.getByText('Ocean Front')).toBeInTheDocument();
    expect(screen.getByText('Free Parking')).toBeInTheDocument();
  });
});
