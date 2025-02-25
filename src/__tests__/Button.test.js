import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import Button from '../components/button';

test('renders button', async () => {

  render(<Button />)

  expect(screen.getByRole('button')).toBeDefined()
})