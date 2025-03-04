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


    test('operator buttons update the state properly', async () => {
        const user = userEvent.setup();
        render(<App/>);

        const display = screen.getByRole("status");

        const buttonTwo = screen.getByText("2");
        await user.click(buttonTwo);
        expect(display.textContent.slice(-1)).toBe("2");

        const buttonPlus = screen.getByText("+");
        await user.click(buttonPlus);
        expect(display.textContent.slice(-1)).toBe("+");

        const buttonThree = screen.getByText("3");
        await user.click(buttonThree);
        expect(display.textContent.slice(-1)).toBe("3");

        const buttonEqual = screen.getByText("=");
        await user.click(buttonEqual);
        expect(display.textContent.slice(-1)).toBe("5");
        });

    test('equation cleared after completing an equation', async () => {
        const user = userEvent.setup();
        render(<App/>);

        const display = screen.getByRole("status");

        const buttonTwo = screen.getByText("2");
        const buttonPlus = screen.getByText("+");
        const buttonThree = screen.getByText("3");
        const buttonEqual = screen.getByText("=");

        await user.click(buttonTwo);
        await user.click(buttonPlus);
        await user.click(buttonThree);
        await user.click(buttonEqual);

        expect(display).toHaveTextContent("5");

        const buttonSeven = screen.getByText("7");
        await user.click(buttonSeven);

        expect(display).toHaveTextContent("7");
        });

    test('adding onto an equation after completing an equation', async () => {
        const user = userEvent.setup();
        render(<App/>);

        const display = screen.getByRole("status");

        const buttonTwo = screen.getByText("2");
        const buttonPlus = screen.getByText("+");
        const buttonThree = screen.getByText("3");
        const buttonEqual = screen.getByText("=");

        await user.click(buttonTwo);
        await user.click(buttonPlus);
        await user.click(buttonThree);
        await user.click(buttonEqual);

        expect(display).toHaveTextContent("5");

        const buttonMinus = screen.getByText("-");
        await user.click(buttonMinus);

        const buttonSeven = screen.getByText("7");
        await user.click(buttonSeven);

        expect(display).toHaveTextContent("5-7");
        });
});