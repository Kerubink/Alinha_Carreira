import React, { useEffect, useState } from 'react';
import styles from './backtotop.module.css'; // Crie um arquivo CSS para estilização

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTop} ${visible ? styles.visible : ''}`}
    >
      ↑
    </button>
  );
};
