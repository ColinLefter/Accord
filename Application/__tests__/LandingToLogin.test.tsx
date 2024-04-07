// At the top of your test file
import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar/Navbar';
import { MantineProvider } from '@mantine/core';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mocking @clerk/nextjs
jest.mock('@clerk/nextjs', () => ({
  useUser: jest.fn(() => ({ user: null })), // Simulate no user being logged in as that is when we render the login button
  UserButton: () => null, // Mock UserButton to render nothing
}));

describe("Testing linking functionality from Landing Page to Login Page", () => {
  it('should navigate to the login page when the login button is clicked', () => {
    render(
      <MantineProvider>
        <Navbar />
      </MantineProvider>
    );

    // This might need adjustment
    const loginButton = screen.getByRole('button', { name: /log in/i });

    // The login button is wrapped in a <Link> component that uses an <a> tag under the hood
    const parentLink = loginButton.closest('a');

    // Since fireEvent.click() does not actually navigate in Jest testing environment,
    // we check the href attribute of the link to verify navigation would occur.
    expect(parentLink).toHaveAttribute('href', '/accord');
  });
});
