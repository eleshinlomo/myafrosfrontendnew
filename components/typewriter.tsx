import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Typewriter = () => {
  const [ text ] = useTypewriter({
    words: [
        "Browse through available projects",
        "The sky is just the beginning"
        ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
      <div className='text-white font-extrabold text-center text-lg md:text-2xl py-6 px-2'>
        <span className=''>{text}</span>
        <Cursor cursorColor='white' />
      </div>
    </div>
  );
};

export default Typewriter;






