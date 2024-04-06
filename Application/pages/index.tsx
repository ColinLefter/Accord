"use client";
// import "../global.css";

/**
 * HomePage is the root page component of the application. Currently, it primarily consists of
 * the Navbar component, serving as the entry point for users accessing the website. As the
 * application evolves, additional components and sections will be integrated into this page
 * to enhance the user experience and provide more functionality.
 *
 * @module HomePage
 * 
 * Usage:
 * - This component should encapsulate and structure the primary content of the home page.
 * - The Navbar component is integrated here to provide consistent navigation across the application.
 * - Future updates to this page will include more components and potentially state management
 *   as the complexity and content of the home page grow.
 *
 * Note:
 * - As the main landing page of the application, it's crucial to ensure optimal performance
 *   and accessibility for a positive user experience.
 * - Consider structuring the HomePage with scalability in mind, allowing for easy integration
 *   of additional features and components.
 */
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import { FooterLinks } from "@/components/Footer/FooterLinks";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <FooterLinks/>
    </>
  );
}
