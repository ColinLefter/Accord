import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SsoCallback() {
  const router = useRouter();

  useEffect(() => {
    // Perform authentication validation here (if necessary)
    const redirectTo = router.query.redirect_url || '/accord';
    router.push(decodeURIComponent(redirectTo as string));
  }, [router]);

  return (
    <div>Redirecting...</div>
  );
}
