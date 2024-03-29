"use client"
import styles from './navbar.module.css'
import React, { useState } from 'react';
import Link from 'next/link';


export default function Navbar(){
  const [selectedOption, setSelectedOption] = useState(2);

  const handleOptionClick = (index:number) => {
    setSelectedOption(index);
  };

  const options = ['About', 'Skills', 'Home', 'Experience', 'Projects','Files'];

  return(
    <div className={styles.container}>
      {options.map((option, index) => (
        <Link
          key={index}
          className={index === selectedOption ? styles.selected : ''}
          onClick={() => handleOptionClick(index)}
          href={option != 'Home' ? `/${option.toLowerCase()}` : '/'}
          style={{maxWidth:'55px'}}
        >
          {option}
        </Link>
      ))}
    </div>
  )
}