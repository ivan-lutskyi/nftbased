import { CSSProperties, FC } from 'react';

import './style.css';

interface IProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  className?: string;
  fontFamily?: 'Gilroy' | 'Suranna';
  textAlign?: 'center' | 'left' | 'right';
  bold?: boolean;
  style?: CSSProperties;
}

const Text: FC<IProps> = ({
  size,
  color,
  children,
  className,
  fontFamily,
  textAlign,
  bold,
  style,
}) => (
  <span
    className={`h-text ${className || ''} ${size}-text`}
    style={{
      color: color || 'black',
      fontFamily: fontFamily || 'Gilroy',
      textAlign: textAlign || 'left',
      fontWeight: bold ? 'bold' : 'normal',
      ...style,
    }}
  >
    {children}
  </span>
);

export default Text;
