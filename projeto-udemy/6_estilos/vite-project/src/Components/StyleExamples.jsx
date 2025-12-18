import React from 'react';
import './StyleExamples.css';
import styles from "./StyleExamples.module.css";

const StyleExamples = () => {
    // inline
    const inlineStyle = {
        color: "red",
        fonSize: "20px",
    }

  return (
    <div>
        <h2 style={inlineStyle}>Estilos inline</h2>
        {/*arquivo de estilos */}
        <p className='text'> Welcome to the jungle</p>
        {/* CSS Modules*/}
        <p className={styles.textPurple}>Menu CSS modulos</p>
    </div>
  )}

export default StyleExamples;