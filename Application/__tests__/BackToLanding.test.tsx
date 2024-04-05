import { render, screen, fireEvent } from '@testing-library/react';
import { Logo } from '@/components/Logo';
import { MantineProvider } from '@mantine/core';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("Testing linking functionality from Login Page or Registration page to Landing Page", () => {
  it('should navigate to the Landing page when the Accord logo is clicked', () => {
    render(
      <MantineProvider>
        <Logo /> {/* Black-box testing. We are testing the logo component by simulating a link click on the login page + Registration page: the "Logo". */}
      </MantineProvider>
    );

    const LogoLink = screen.getByRole('link', { name: 'Accord' }); // This is how we are identifying the "Logo" link
    const parentLink = LogoLink.closest('a'); // Find the closest anchor tag up the tree from the button.
    fireEvent.click(LogoLink); // Simulating a click on the "Accord" text which is the logo
    expect(parentLink).toHaveAttribute('href', '/'); //  confirming that the link has the correct href attribute.
    
  });
});