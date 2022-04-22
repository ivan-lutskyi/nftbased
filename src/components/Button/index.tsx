import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text';

interface IProps {
  text: string;
  bgColor: string;
  textColor: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  link?: string;
  isLink?: boolean;
  onClick: () => void;
  size: 's' | 'm' | 'l';
  rounded: boolean;
  customWidth?: string;
  centered?: boolean;
}

const Button = ({
  text,
  bgColor,
  textColor,
  iconLeft,
  iconRight,
  link,
  isLink = false,
  onClick,
  size,
  rounded,
  customWidth,
  centered,
}: IProps) => {
  const sizesInPixels: Record<'s' | 'm' | 'l', number> = {
    s: 150,
    m: 150,
    l: 300,
  };

  const borderRadiusBySize: Record<'s' | 'm' | 'l', number> = {
    s: 10,
    m: 13,
    l: 10,
  };

  const style: CSSProperties = {
    backgroundColor: bgColor,
    width: customWidth || sizesInPixels[size],
    color: textColor,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    border: 0,
    outline: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    borderRadius: rounded ? borderRadiusBySize[size] : 0,
  };

  return isLink && link ? (
    <Link
      to={link}
      className="button-reusable"
      style={
        centered
          ? {
              ...style,
              alignSelf: 'center',
            }
          : {
              ...style,
            }
      }
    >
      {iconLeft}

      <div
        style={{
          marginLeft: iconLeft ? 10 : 0,
          marginRight: iconRight ? 10 : 0,
        }}
      >
        <Text size="h4" color={textColor}>
          {text}
        </Text>
      </div>

      {iconRight}
    </Link>
  ) : (
    <button style={style} onClick={onClick} type="button" className="button-reusable">
      {iconLeft}

      <div
        style={{
          marginLeft: iconLeft ? 10 : 0,
          marginRight: iconRight ? 10 : 0,
        }}
      >
        <Text size="h4" color={textColor}>
          {text}
        </Text>
      </div>

      {iconRight}
    </button>
  );
};

export default Button;
