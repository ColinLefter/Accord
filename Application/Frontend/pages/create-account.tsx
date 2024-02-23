import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm';
import { Button, Text } from '@mantine/core';
import { Logo } from '@/components/Logo/Logo';

export default function CreateAccount() {
  return (
    <div>
      <div style={{ zIndex: 2, position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, padding: '20px', marginLeft: '11px' }}>
          <Logo/>
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '20px', marginRight: '11px'}}>
          <Button className="bg-black text-black">Log in</Button>
        </div>
      </div>
      <RegistrationForm/>
    </div>
  );
}