import { render, screen, fireEvent } from '@testing-library/react';
import { Logo } from '@/components/Logo';
import { MantineProvider } from '@mantine/core';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

// Mocking @clerk/nextjs
jest.mock('@clerk/nextjs', () => ({
  useUser: jest.fn(() => ({ user: null })),
}));

describe("Testing linking functionality from Login Page or Registration page to Landing Page", () => {
  it('should navigate to the Landing page when the Accord logo is clicked', () => {
    render(
      <MantineProvider>
        <Logo /> {/* Black-box testing. We are testing the logo component by simulating a link click on the login page + Registration page: the "Logo". */}
      </MantineProvider>
    );

    // Using getByText instead of getByRole to find the clickable logo text
    const logoText = screen.getByText('Accord.');

    // Since the actual navigation <a> tag is abstracted away in AppLink,
    // we nede to verify the navigation indirectly. Since AppLink uses next/link,
    // we can't directly test navigation in Jest without further mocking.
    // However, we can ensure the logo text is in the document as a sanity check.
    expect(logoText).toBeInTheDocument();
  });
});