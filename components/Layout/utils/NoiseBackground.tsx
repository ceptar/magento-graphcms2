import React from 'react';
import { styled } from '@mui/material/styles';

const NoiseContainer = styled('div')(() => ({
    position: 'fixed',
    top: 0,

    left: 0,

    width: '100%',
    height: '100%',
    zIndex: 100,
    pointerEvents: 'none',
    backgroundImage: 'url("/lovebird-noise.webp")',
    objectFit: 'fill',
    animation: 'noise-animation 0.01s infinite',
    opacity: 0.5, // Adjust opacity as needed
}));

// Define keyframes for the noise animation
const GlobalStyles = styled('style')`
    @keyframes noise-animation {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(3px, 3px);
        }
        100% {
            transform: translate(0, 0);
        }
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