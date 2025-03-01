import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../components/button';

test('renders button with correct label', () => {
  render(<Button label="Click me" whenClicked={() => {}} />);

  const buttonElement = screen.getByRole('button', { name: "Click me" });

  expect(buttonElement).toBeInTheDocument(); // Check if the button exists
});

