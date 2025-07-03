import React from 'react';
import Wave from 'react-wavify';

const Home = () => {
  return (
    
    
    <div className="wave-container" style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      {/* First wave layer - back */}
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        bottom: 0, 
        height: '32%',
        opacity: 0.3,
        marginBottom: '-10px' // Negative margin to extend past bottom
      }}>
        <Wave 
          fill="url(#gradient1)"
          paused={false}
          style={{
            marginBottom: '-10px', // Additional negative margin on Wave itself
            display: 'block',
            width: '100%',
            height: '100%'
          }}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.26,
            points: 4
          }}
        >
          <defs>
            <linearGradient id="gradient1" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#7486f7" />
              <stop offset="90%" stopColor="#364185" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      
      {/* Second wave layer - middle */}
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        bottom: 0, 
        height: '30%',
        opacity: 0.5,
        marginBottom: '-10px' // Negative margin to extend past bottom
      }}>
        <Wave 
          fill="url(#gradient2)"
          paused={false}
          style={{
            marginBottom: '-10px', // Additional negative margin on Wave itself
            display: 'block',
            width: '100%',
            height: '100%'
          }}
          options={{
            height: 20,
            amplitude: 35,
            speed: 0.24,
            points: 5
          }}
        >
          <defs>
            <linearGradient id="gradient2" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#5d74e3" />
              <stop offset="90%" stopColor="#303e7a" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      
      {/* Third wave layer - front */}
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        bottom: 0, 
        height: '28%',
        marginBottom: '-10px' // Negative margin to extend past bottom
      }}>
        <Wave 
          fill="url(#gradient3)"
          paused={false}
          style={{
            marginBottom: '-10px', // Additional negative margin on Wave itself
            display: 'block',
            width: '100%',
            height: '100%'
          }}
          options={{
            height: 15,
            amplitude: 32,
            speed: 0.22,
            points: 6
          }}
        >
          <defs>
            <linearGradient id="gradient3" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#7486f7" />
              <stop offset="90%" stopColor="#364185" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
    
  );
};

export default Home;