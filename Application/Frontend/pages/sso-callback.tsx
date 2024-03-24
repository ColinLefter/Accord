// pages/sso-callback.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SsoCallback() {
  const router = useRouter();

  useEffect(() => {
    const redirectUrl = router.query.redirect_url 
      ? decodeURIComponent(router.query.redirect_url as string) 
      : '/accord'; // Redirect to application page

    router.push(redirectUrl);
  }, [router]);

  return <div>Redirecting...</div>;
}
