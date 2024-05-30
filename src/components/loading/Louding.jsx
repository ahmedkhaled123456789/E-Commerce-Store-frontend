import React, { useEffect, useState } from 'react'
import './Loading.css'
const Louding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  if (!isLoading) return null;
  return (
    < > 
    <div className="loading">
      <div className="center">
        <div className="ring"></div>
        <div className="text"><span>Ex</span> clusive</div>
      </div>
    </div>
    </ >
  )
}

export default Louding