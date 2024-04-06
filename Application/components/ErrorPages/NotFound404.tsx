import { Image, Container, Title, Text, Button, SimpleGrid, Center } from '@mantine/core';
import classes from './NotFound404.module.css';
import Link from "next/link";

/**
 * Renders a custom 404 Not Found page designed to handle instances where a user attempts to navigate to
 * a non-existent page within the application. This component provides both a visual cue in the form of an
 * illustrative image and a textual explanation that the requested page could not be found.
 *
 * The layout adapts responsively to different screen sizes, offering an optimized viewing experience across
 * devices. Users are presented with an option to return to the homepage, facilitating easy navigation back
 * to the main content of the application.
 *
 * @returns {JSX.Element} A visually engaging and informative 404 Not Found page with a link back to the homepage.
 */
export function NotFound404() {
  return (
    <div className="general-contaienr"> {/* Not vertically centering for some reaosn */}
      <Container className={classes.root}>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          <Image src="/404Image.svg" className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text c="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Link href="/accord">
              <Button variant="outline" size="md" mt="xl" className={classes.control}>
                Get back to home page
              </Button>
            </Link>
          </div>
          <Image src="/404Image.svg" className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
    </div>
  );
}