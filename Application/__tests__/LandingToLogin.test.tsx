import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/Navbar/Navbar';
import { MantineProvider } from '@mantine/core';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("Testing linking functionality from Landing Page to Login Page", () => {
  it('should navigate to the login page when the login button is clicked', () => {
    render(
      <MantineProvider>
        <Navbar /> {/* Black-box testing. We are testing the Navbar component by simulating a button click on the navbar: the Login button. */}
      </MantineProvider>
    );

    const loginButton = screen.getByRole('button', { name: 'Log in' }); // This is how we are identifying the login button within the navbar component.

    // The button is within a Link, so we check the Link's behavior rather than a button click.
    const parentLink = loginButton.closest('a'); // Find the closest anchor tag up the tree from the button.
    fireEvent.click(loginButton); // Simulating a click on the "Login" button
    expect(parentLink).toHaveAttribute('href', '/log-in'); // confirming that the button has the correct href attribute.
    
  });
});