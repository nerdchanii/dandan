import { Button } from '@dandan/ui';
import React from 'react';
import styles from './GNB.module.css';
import NavBar from './NavBar';

const index = () => {
  return (
    <div className={styles.container}>
      <div>모의</div>
      <NavBar className={styles.navbar} />
      <div className={styles.buttongroup}>
        <Button size="lg" priority="primary" onClick={console.log}>
          로그인
        </Button>
        <Button size="lg" priority="secondary" onClick={console.log}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default index;
