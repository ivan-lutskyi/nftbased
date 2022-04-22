import { useSelector } from 'react-redux';
import { IRootState } from '../store';

// eslint-disable-next-line no-undef
export const DimensionedComponent = (Desktop: JSX.Element, Mobile: JSX.Element) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? Mobile : Desktop;
};
