// src/components/PageWave.jsx
import React from 'react';
import Wave from 'react-wavify';
import { Parallax } from 'react-scroll-parallax';

const PageWave = ({ backgroundColor, waveColor, children, id }) => {
  return (
    <div 
      id={id}
      className="page-section"
      style={{ 
        position: 'relative',
        minHeight: '100vh',
        backgroundColor,
        padding: '80px 20px 120px' // Add padding to accommodate the wave
      }}
    >
      <Parallax translateY={[-15, 15]}>
        <div className="content-container">
          {children}
        </div>
      </Parallax>
      
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%',
        zIndex: 10 
      }}>
        <Wave 
          fill={waveColor}
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.15,
            points: 4
          }}
        />
      </div>
    </div>
  );
};

export default PageWave;