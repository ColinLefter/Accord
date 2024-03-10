import Link from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/dist/client/link';

type AppLinkProps = LinkProps & {
  children: ReactNode;
  style?: React.CSSProperties;
}

export function AppLink({ children, ...props }: AppLinkProps) {
  return (
    <Link {...props} passHref style={{ textDecoration: 'none', ...props.style }}>
      {children}
    </Link>
  );
};

export default AppLink;