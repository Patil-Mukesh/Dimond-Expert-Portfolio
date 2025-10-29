import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const IMAGES = [
  'https://jogigems.com/wp-content/uploads/2017/10/12-19-diamond-investing-1.jpg',
  'https://sltl.com/assets/uploads/images/Planning%20-%20Lab%20Grown%20Diamond%20CVD%20Laser.png',
  'https://i.ytimg.com/vi/xWT_fVVhlE8/maxresdefault.jpg',
  'https://rapaport.com/wp-content/uploads/2023/05/Sarine-Galaxy-machine-1280-credit-Sarine-1024x576.jpg',
  'https://i.ytimg.com/vi/vsZIRvDEFMg/hqdefault.jpg',
  'https://www.naturaldiamonds.com/wp-content/uploads/2020/06/MG-1134.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 2000); // every 2 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slider-image ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
