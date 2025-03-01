import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Display from '../components/display';

test('renders displays container', async () => {
  let DisplayDOM;
  DisplayDOM = render(<Display value="0" />).container.firstChild;
  expect(DisplayDOM.querySelector('.display')).toBeDefined()
})


test('renders displays with correct value', async () => {
  render(<Display value= "123" />);
  expect(screen.getByText("123")).toBeInTheDocument();
})