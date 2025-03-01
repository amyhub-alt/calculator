import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from "../App";

describe('<App/> component', () => {
    
    test('user clicks button and updates the display', async () => {
        const user = userEvent.setup();
        render(<App/>);
        
        //find the display element by its initial text value "0"
        const display = screen.getByRole("status");
        expect(display).toBeInTheDocument();

        //find button with label 1 and click it
        const buttonOne = screen.getByText("1");
        await user.click(buttonOne);

        //check if display updates to "1"
        expect(display).toHaveTextContent("1");
    });
  


    test('user clicks multiple buttons and updates the display correctly', async () => {
        const user = userEvent.setup();
        render(<App/>);

        //find the display element by its initial text value "0"
        const display = screen.getByRole("status");
        expect(display).toBeInTheDocument();

         //find button with label 2 and click it
         const buttonTwo = screen.getByText("2");
         await user.click(buttonTwo);

          //find button with label 1 and click it
        const buttonOne = screen.getByText("1");
        await user.click(buttonOne);

        //check if display updates to "21"
        expect(display).toHaveTextContent("21");

    });





// test('operator buttons update the state properly', () => {
//     render(<Button label="Click me" whenClicked={() => {}} />);
    
//     const buttonElement = screen.getByRole('button', { name: "Click me" });
    
//     expect(buttonElement).toBeInTheDocument(); // Check if the button exists
//     });


});