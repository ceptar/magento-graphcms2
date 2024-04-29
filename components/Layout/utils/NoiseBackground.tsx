import React from 'react';
import { styled } from '@mui/material/styles';

const NoiseContainer = styled('div')(() => ({
    position: 'fixed',
    top: '-50%',
    right: '-50%',
    left: '-50%',
    bottom: '-50%',
    width: '200%',
    height: '200vh',
    zIndex: 100,
    pointerEvents: 'none',
    background: 'transparent',
    backgroundImage: 'url("/noise-transparent.png")',
    // objectFit: 'fill',
    animation: 'bg-animation .2s infinite',
    opacity: 0.6, // Adjust opacity as needed
    visibility: 'visible',
}));

// Define keyframes for the noise animation
const GlobalStyles = styled('style')`
    
@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}
`;

const NoiseBackground: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <NoiseContainer />
        </>
    );
};

export default NoiseBackground;