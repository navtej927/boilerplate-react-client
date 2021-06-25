import React, { useEffect } from 'react';
import axios from 'axios';

export const Navbar = () => {

  useEffect(()=>{
    try {
        axios.get("www.google.com");
    } catch (error) {
      console.log("error");
    }
  }, [])
  return (<h1>NAVBAR</h1>)
}