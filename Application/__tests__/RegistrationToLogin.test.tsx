import { render, screen, fireEvent } from '@testing-library/react';
import { Registration } from '@/components/Accounts/Registration';
import { MantineProvider } from '@mantine/core';

/**
 * Ensures the Login button on the Registration Page correctly navigates users to the Login Page.
 *
 * By simulating a user clicking the Login button on the registration page, this test checks that the application
 * facilitates straightforward navigation back to the login page for users who might decide to log in instead of
 * creating a new account. The Registration component is tested within the MantineProvider context using
 * `@testing-library/react` to render and interact with the UI as a user would. The test verifies the correct route
 * is assigned to the Login button for expected user flow.
 *
 * Key Points:
 * - Validates the "Log in" button's presence and its navigational role within the Registration component.
 * - Confirms navigation intent by checking the href attribute of the encompassing <a> tag points to '/log-in'.
 */
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("Testing linking functionality from Registration Page to Login Page", () => {
  it('should navigate to the Login page when the Login button is clicked', () => {
    render(
      <MantineProvider>
        <Registration /> {/* Black-box testing. We are testing the Registration component by simulating a button click on the registration page: the Login button. */}
      </MantineProvider>
    );

    const loginButton = screen.getByRole('button', { name: 'Log in' }); // This is how we are identifying the login button within the Registration component.
    // The button is within a Link, so we check the Link's behavior rather than a button click.
    const parentLink = loginButton.closest('a'); // Find the closest anchor tag up the tree from the button.
    fireEvent.click(loginButton); // Simulating a click on the "Login" button
    expect(parentLink).toHaveAttribute('href', '/log-in'); // confirming that the button has the correct href attribute.
    
  });
});