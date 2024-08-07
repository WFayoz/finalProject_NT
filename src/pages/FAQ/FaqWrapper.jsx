import React from 'react';
import FaqAccardion from './FaqAccardion';

const FaqWrapper = () => {
  return (
    <div className='max-w-[1350px] w-full mx-auto px-5 flex flex-col md:flex-row gap-10 mt-36'>
      <h1 className='text-[48px] bg-primaryCream w-full md:w-[650px]'>
        Часто задаваемые вопросы
      </h1>
      <div className='w-full md:w-[650px]'>
        <FaqAccardion />
      </div>
    </div>
  );
};

export default FaqWrapper;