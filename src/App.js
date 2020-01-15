import React from 'react';
import { ShellComponent } from './scenes/ShellComponent/ShellComponent';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <h2>Mahjong game</h2>
      <ShellComponent />
    </div>
  );
}

export default App;
