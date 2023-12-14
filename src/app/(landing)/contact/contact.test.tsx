import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './page';

describe('Contact Page', () => {
  it('should render the page title', () => {
    render(<Contact />);
    const pageTitleElement = screen.getByText('This is the home page');
    expect(pageTitleElement).toBeInTheDocument();
  });
});
