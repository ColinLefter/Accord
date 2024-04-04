// App.tsx or any other component where you want to use the dropdown
import React from 'react';
import InboxDropdown from '../components/Navbar/notifcation';

const App = () => {
  return (
    <div>
      {/* Other components */}
      <InboxDropdown userId={'user_2eHnI6SD0sIToIMcS5DqAfEBp1K'} />
      {/* Other components */}
    </div>
  );
};

export default App;
