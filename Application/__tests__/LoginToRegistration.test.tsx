import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '@/components/Accounts/Login';
import { MantineProvider } from '@mantine/core';

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