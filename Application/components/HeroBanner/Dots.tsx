import React from 'react';
import { DotsProps } from "@/accordTypes";
import { useComputedColorScheme, useMantineTheme } from "@mantine/core";

/**
 * Renders a grid of dots within an SVG element.
 * 
 * This component dynamically generates a grid of dots based on specified properties
 * such as size, radius, and spacing between dots. It utilizes the current theme's color scheme
 * to set the color of the dots.
 * 
 * @param {DotsProps & { spacing?: number }} props The component props.
 * @param {number} props.size The size (width and height) of the SVG element in pixels.
 * @param {number} props.radius The border-radius of each dot, making them circular or square.
 * @param {number} [props.spacing=20] The spacing between each dot in the grid.
 * @param {...any} others Additional props passed to the SVG element.
 * @returns {JSX.Element} The SVG element containing the grid of dots.
 */
export function Dots({ size = 200, radius = 2.5, spacing = 20, ...others }: DotsProps & { spacing?: number }) {
  const colorScheme = useComputedColorScheme();
  const theme = useMantineTheme();
  const color = colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9];

  // Calculate how many dots fit in the given size with specified spacing
  const dotsPerRow = Math.floor(size / spacing);
  const dotsPerColumn = Math.floor(size / spacing);

  // Generate dots
  const dots = [];
  for (let y = 0; y < dotsPerColumn; y++) {
    for (let x = 0; x < dotsPerRow; x++) {
      dots.push(
        <rect
          key={`${x}-${y}`} // Unique key for each dot
          width="5"
          height="5"
          rx={radius}
          x={x * spacing} // Position based on loop iteration and spacing
          y={y * spacing} // Position based on loop iteration and spacing
          fill={color}
        />
      );
    }
  }

  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      {...others}
    >
      {dots}
    </svg>
  );
}
