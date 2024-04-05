import AppLink from "@/components/AppLink";
import { Text } from "@mantine/core";

/**
 * Logo renders the application's logo, styled with a gradient and encapsulated within a clickable area
 * that directs the user back to the homepage. This component leverages the AppLink component to provide
 * consistent link behavior across the application while applying specific visual styling to represent
 * the brand identity effectively.
 *
 * The Logo is designed using Mantine's Text component with a gradient effect, symbolizing the application's
 * aesthetic and branding. The use of the AppLink component ensures that the logo is accessible and 
 * navigational, enhancing the user experience by providing a quick return to the home screen.
 *
 * @returns The JSX element representing the application's logo, styled and wrapped in a navigational link.
 */
export function Logo() {
  return (
    <AppLink href="/">
      <Text
        variant="gradient"
        fw={800}
        size="xl"
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        Accord.
      </Text>
    </AppLink>
  );
}
