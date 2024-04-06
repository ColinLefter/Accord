import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react';
import { Logo } from '@/components/Logo';
import classes from './FooterLinks.module.css';
import Link from "next/link";

const data = [
  {
    title: 'Us on GitHub',
    links: [
      { label: 'Colin Lefter', link: 'https://github.com/ColinLefter' },
      { label: 'Hoc Nguyen', link: 'https://github.com/Hocng7' },
      { label: 'Toby Nguyen', link: 'https://github.com/TobyNguyen710' },
      { label: 'Immanuel Wiessler', link: 'https://github.com/ThunderIW' },
      { label: 'Bao Pham', link: 'https://github.com/notbaopham' },
    ],
  },
  {
    title: 'The Project',
    links: [
      { label: 'Our repo on GitHub', link: 'https://github.com/ColinLefter/Accord' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'UBC', link: 'https://www.ubc.ca/' }
    ],
  },
];

/**
 * Renders the footer section of the application with links to GitHub, the project repository,
 * and community resources. It also includes social media icons for further engagement.
 * 
 * The footer dynamically generates groups of links based on predefined data. Each group represents
 * a different category, such as links to individual GitHub profiles, project information, and
 * community resources. This component utilizes Mantine's UI components for consistent styling
 * and responsiveness across the application.
 */
export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
    <Text<'a'>
      key={index}
      className={classes.link}
      component="a"
      href={link.link}
    >
      {link.label}
    </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
          <Text size="xs" c="dimmed" className={classes.description}>
            Real-time privacy-first text channels all in your web browser.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="95%">
        <Text c="dimmed" size="sm">
          © 2024 {<Logo size="md" />}
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <Link href="https://github.com/ColinLefter/Accord">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
}