import { MantineProvider } from '@mantine/core';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "@/pages/index"; // Index Page
import LoginPage from "@/pages/log-in"; // Login page

// Mocking the App component
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/log-in" element={<LoginPage />} />
    </Routes>
  </Router>
);

// Test suite for page linking functionality
describe("Page Linking Test", () => {
  // Test case to check if navigation works from IndexPage to LoginPage
  it("should navigate from IndexPage to LoginPage", () => {
    // Render the App component
    render(<App />);

    // Check if the content of IndexPage is rendered
    const indexPageContent = screen.getByText("Accord");
    expect(indexPageContent).toBeInTheDocument();

    // Find the link to Log in and click it
    const linkToLogIn = screen.getByText("Log in");
    fireEvent.click(linkToLogIn);

    // Check if the content of Log in Page is rendered
    const logInPageContent = screen.getByText("Welcome back to Accord");
    expect(logInPageContent).toBeInTheDocument();
  });

  // Additional test cases can be added for other page linkings
});
