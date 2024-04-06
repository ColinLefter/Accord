import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';

/**
 * Provides a user interface control for toggling between light and dark color schemes across the application.
 * Utilizing Mantine's color scheme hooks, this component allows users to switch themes with a single click.
 *
 * The toggle visually represents the current theme with corresponding icons (sun for light, moon for dark) and
 * dynamically updates the application's color scheme preference. This component aids in enhancing the
 * accessibility and personalization of the user experience by supporting preferred visual themes.
 *
 * @returns {JSX.Element} An action icon that toggles the color scheme of the application when clicked.
 */
export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="transparent"
        color={computedColorScheme === 'light' ? 'black' : 'white'}
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}