import { Title, Text, Button, Container, Group, Stack, Center } from '@mantine/core';
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { Dots } from './Dots';
import classes from './HeroBanner.module.css';
import Link from "next/link";
import { useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { FeatureCarousel } from "@/components/FeatureCarousel/FeatureCarousel";

export function HeroBanner() {
  const colorScheme = useComputedColorScheme();
  const theme = useMantineTheme();
  const mainColor = colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9]; // Keeping this here in case we want to use it later
  const dimmedColor = colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.dark[9];

  return (
    <div>
      <div className={classes.videoWrapper}>
        <video
          autoPlay
          loop
          muted
          className={classes.videoCentered}
          src={colorScheme === "dark" ? "/HeroBannerDark.mp4" : "/HeroBannerLight.mp4"}
        />
        {/* Opacity mask overlay */}
        <div className={colorScheme === "dark" ? classes.blackOpacityMask : classes.whiteOpacityMask }></div>
      </div>
      <Container className={classes.wrapper} fluid>
      <div className={classes.inner}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots size={150} radius={300} className={classes.dots} style={{ left: 200, top: 400 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Real-time{' '}
            <Text component="span" className={classes.title} variant="gradient">
              privacy-first
            </Text>{' '}
            text channels
          </Title>
          <Stack>
            <Container p={0} size={600}>
              <Text size="md" c={dimmedColor} className={classes.description}>
                Leverage our unique privacy-first text channels to communicate with your friends and colleagues like never before.
              </Text>
            </Container>
            <Center>
              <Group>
                <Button className={classes.control} size="lg" variant="outline" color={dimmedColor}>
                  Our repo on GitHub
                </Button>
                <Link href="/accord">
                  <Button className={classes.control} variant="gradient" size="lg">
                    Launch Accord
                  </Button>
                </Link>
              </Group>
            </Center>
          </Stack>
        </div>
      </div>
      </Container>
    </div>
  );
}