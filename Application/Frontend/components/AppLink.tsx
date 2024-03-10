import Link from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/dist/client/link';

type AppLinkProps = LinkProps & {
  children: ReactNode;
  style?: React.CSSProperties;
}

/**
 * AppLink is a wrapper component around Next.js's Link component, designed to simplify the usage of links 
 * within the application while enforcing consistent styling, particularly removing text decoration.
 * 
 * This component accepts all properties valid for a Next.js Link and an optional style object,
 * allowing for further customization on top of the default styles provided. The primary enhancement
 * made by AppLink is the removal of text decoration, aiming to maintain a clean and consistent
 * appearance for all links throughout the app.
 * 
 * @param {AppLinkProps} props - The props object containing Link properties, potential style 
 * overrides, and children elements to be rendered within the link.
 * @returns The Next.js Link component wrapped with additional styling and functionality.
 */
export function AppLink({ children, ...props }: AppLinkProps) {
  return (
    <Link {...props} passHref style={{ textDecoration: 'none', ...props.style }}>
      {children}
    </Link>
  );
};

export default AppLink;