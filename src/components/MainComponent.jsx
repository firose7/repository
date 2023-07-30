import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const MainComponent = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <Header />}

      {isLoggedIn && <Footer />}
    </div>
  );
};

export default MainComponent;
