import { useState, useEffect, CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import animationData from '../../assets/coreLoaderAnimation.json';
import { ReactComponent as Logo } from '../../assets/img/appLogo/logo.svg';
import { COLORS } from '../../constants/colors';
import { IRootState } from '../../store';
import { setIsLoading } from '../../store/actions/core';

const defaultLootieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const CoreLoader = () => {
  const styles: Record<
    'coreLoaderContainer' | 'coreLoaderAnimation' | 'coreLoaderLogo',
    CSSProperties
  > = {
    coreLoaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: COLORS.WHITE,
      position: 'fixed',
      top: 0,
      zIndex: 10,
      overflow: 'hidden',
    },
    coreLoaderAnimation: {
      position: 'absolute',
      width: '30vw',
      height: '30vw',
      zIndex: 11,
      cursor: 'initial',
    },
    coreLoaderLogo: {
      position: 'absolute',
      width: '5vw',
      height: '5vw',
      backgroundColor: COLORS.WHITE,
      zIndex: 12,
    },
  };

  return (
    <div className="core-loader" style={styles.coreLoaderContainer}>
      <Logo style={styles.coreLoaderLogo} />
    </div>
  );
};

export default CoreLoader;
