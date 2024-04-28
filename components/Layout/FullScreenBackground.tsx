import { Box, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Image } from '@graphcommerce/image';

interface FullscreenBackgroundProps {
  imageUrl?: string; // Optional prop for image URL
}

const StyledBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url((props) => props.imageUrl || '/lovebird-noise.webp')); // Use default or provided URL
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
`;

export const FullscreenBackground: React.FC<FullscreenBackgroundProps> = () => {
  const theme = useTheme(); // Access theme for potential breakpoints

  return (
    <StyledBackground imageUrl={'/lovebird-noise.webp'} /> // Adjust default image path
  );
};