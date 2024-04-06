import AppLink from "@/components/AppLink";
import { Text } from "@mantine/core";
import { LogoProps } from "@/accordTypes";

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
export function Logo(props: LogoProps = {}) {
  // Destructure props with default values inside the function body
  const { fw = 800, size = "xl" } = props;

  return (
    <AppLink href="/">
      <Text
        variant="gradient"
        fw={fw}
        size={size}
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        Accord.
      </Text>
    </AppLink>
  );
}
