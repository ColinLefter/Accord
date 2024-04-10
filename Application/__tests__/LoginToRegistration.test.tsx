import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '@/components/Accounts/Login';
import { MantineProvider } from '@mantine/core';

/**
 * Tests the navigation link from the Login Page to the Registration Page through user interaction.
 *
 * Focuses on ensuring that users can navigate from the login page to the registration page by clicking
 * on the "Create one today" link. The Login component is rendered with `@testing-library/react` to closely
 * mimic user interaction within the MantineProvider context. This test verifies that the hyperlink for
 * creating a new account leads to the correct application route.
 *
 * Key Points:
 * - Checks the presence and functionality of the "Create one today" link within the Login component.
 * - Confirms that the hyperlink points to the '/create-account' route, facilitating user navigation
 *   to the registration page.
 */
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("Testing linking functionality from Login Page to Registration Page", () => {
  it('should navigate to the registration page when the "Create one today" text is clicked', () => {
    render(
      <MantineProvider>
        <Login /> {/* Black-box testing. We are testing the component by simulating a link click on the login page: the "Create one today" hyperlink. */}
      </MantineProvider>
    );

    const CreateAccountLink = screen.getByRole('link', { name: 'Create one today' }); // This is how we are identifying the "Create one today" link in the Login component
    const parentLink = CreateAccountLink.closest('a'); // Find the closest anchor tag up the tree from the button.
    fireEvent.click(CreateAccountLink); // Simulating a click on the "Create one today" link
    expect(parentLink).toHaveAttribute('href', '/create-account'); //  confirming that the link has the correct href attribute.
    
  });
});