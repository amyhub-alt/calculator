import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import Button from '../components/button';
import Display from '../components/display';

test('renders displays text', async () => {

  let DisplayDOM;
 
  DisplayDOM = render(<Display />).container.firstChild;

  expect(DisplayDOM.querySelector('.display')).toBeDefined()
})