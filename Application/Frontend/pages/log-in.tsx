import { Login } from '@/components/Accounts/Login';
import { Logo } from '@/components/Logo';
import { Button } from '@mantine/core';

export default function LoginPage() {
  return (

    <div>
      <div style={{ zIndex: 2, position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, padding: '20px', marginLeft: '11px' }}>
          <Logo/>
        </div>

      </div>
      <Login/>
    </div>
  );
}