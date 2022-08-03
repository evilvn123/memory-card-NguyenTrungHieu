import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Render button start', () => {
  render(<App />);
  const restart = screen.getByText(/restart/i);
  expect(restart).toBeInTheDocument();
});
