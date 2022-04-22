import { COLORS } from './colors';

export const particlesParams = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: COLORS.WHITE,
        blur: 10,
      },
      width: 1,
    },
  },
};

export const particlesMobileParams = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: COLORS.WHITE,
        blur: 1,
      },
      width: 1,
    },
  },
  polygon: {
    enable: true,
    move: {
      radius: 10,
    },
  },
};
