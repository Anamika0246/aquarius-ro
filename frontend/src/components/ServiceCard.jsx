// import React from 'react';

// const AnimatedCard = () => {
//   return (
//     <div className="relative group w-[190px] h-[254px] cursor-pointer">
//       {/* Glow Layer (blurred) */}
//       <div className="absolute inset-0 z-0 scale-[0.95] blur-[20px] bg-gradient-to-br from-[#fc00ff] to-[#00dbde] transition-all duration-500 group-hover:blur-[30px]" />

//       {/* Gradient Layer (acts like ::before) */}
//       <div className="absolute inset-0 left-[-5px] m-auto w-[200px] h-[264px] rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] z-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]" />

//       {/* Main Card */}
//       <div className="relative z-20 w-full h-full bg-black/85 rounded-lg flex flex-col justify-end p-3 gap-3">
//         {/* Empty content blocks for structure */}
//         <p className="text-lg font-bold capitalize"></p>
//         <p className="text-sm"></p>
//         <p className="text-sm text-[#e81cff] font-semibold"></p>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;



import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    gap: 12px;
    border-radius: 15px;
    cursor: pointer;
    color: #000000;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 15px;
    background: linear-gradient(-45deg, #1cc2ff 0%, #ff261b 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #1cffa4 0%, #ff01aee6 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(40px);
  }

  .heading {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;
  }

  .card p:not(.heading) {
    font-size: 20px;
    color: #000000;
  }

  .card p:not::after) {
    font-size: 0px;
    color: #ffffff;
  }

  .card p:last-child {
    color: #ffffff;
  }

  .card:hover::after {
    filter: blur(50px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  .card:hover {
    transform: scale(1);
  }`;

export default Card;
