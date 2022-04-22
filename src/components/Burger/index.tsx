import './style.css';

interface IProps {
  isMenuOpened: boolean;
  setIsMenuOpened: () => void;
  color?: 'white' | 'black';
}

const Burger = ({ isMenuOpened, setIsMenuOpened, color = 'black' }: IProps) => (
  <button
    type="button"
    className={`burger-container ${isMenuOpened && 'burger-container-active'}`}
    onClick={setIsMenuOpened}
  >
    <div
      className={`burger-item ${isMenuOpened && 'burger-item-active'}`}
      style={{ backgroundColor: isMenuOpened ? 'black' : color }}
    />
    {!isMenuOpened && (
      <div
        className={`burger-item ${isMenuOpened && 'burger-item-active'}`}
        style={{ backgroundColor: isMenuOpened ? 'black' : color }}
      />
    )}
    <div
      className={`burger-item ${isMenuOpened && 'burger-item-active'}`}
      style={{ backgroundColor: isMenuOpened ? 'black' : color }}
    />
  </button>
);

export default Burger;
