import React, { useEffect } from 'react';
import '../styles/PageLayout.css';

function PageLayout({ children }) {
  useEffect(() => {
    const layout = document.querySelector('.page-layout');
    layout.classList.add('fade-in');
  }, []);

  return (
    <div className="page-layout">
      <div className="page-box">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
