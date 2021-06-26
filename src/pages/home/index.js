import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return <div>Home</div>;
};
