import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutsideAlerter } from '../../hooks/outsideAlerter.hook';
import { useTranslation } from '../../hooks/translation';
import { IRootState } from '../../store';
import { generateId } from '../../utils';
import { ReactComponent as BottomArrow } from '../Navbar/img/bottomArrow.svg';
import './style.mobile.css';
import './style.css';

interface IProps {
  onChange: (value: any) => void;
  options: any[];
  initialValue?: any;
  shouldBeLight?: boolean;
}

const Dropdown = ({ options, onChange, initialValue = '', shouldBeLight }: IProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const changeOpenedStatus = () => {
    setIsOpened(!isOpened);
  };

  const onDropdownOutsidePress = () => {
    if (!isOpened) {
      setIsOpened(false);
    }
  };

  const currentLanguage = useSelector((state: IRootState) => state.core.language);

  const onValueClick = (newValue: any) => {
    onChange(newValue);
    setIsOpened(false);
  };

  const t = useTranslation();

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onDropdownOutsidePress);

  return (
    <>
      {isDeviceMobile ? (
        <div className="dropdown-container-mobile" ref={wrapperRef}>
          <button className="dropdown-btn-mobile" onClick={changeOpenedStatus} type="button">
            <span style={{ marginRight: 5, textTransform: 'uppercase' }}>
              {currentLanguage.value}
            </span>
            {isOpened ? (
              <div
                style={{
                  transform: 'rotate(180deg)',
                  paddingBottom: 6,
                  filter: shouldBeLight ? 'invert()' : '',
                }}
              >
                <BottomArrow />
              </div>
            ) : (
              <div
                style={{
                  filter: shouldBeLight ? 'invert()' : '',
                  paddingBottom: 6,
                }}
              >
                <BottomArrow />
              </div>
            )}
          </button>

          {isOpened && (
            <div className="options-list-container-mobile">
              {options.map((option) => (
                <button
                  key={generateId()}
                  className={
                    currentLanguage.value === option.value
                      ? 'option-item-mobile option-item-active-mobile'
                      : 'option-item-mobile'
                  }
                  type="button"
                  onClick={() => onValueClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="dropdown-container" ref={wrapperRef}>
          <button className="dropdown-btn" onClick={changeOpenedStatus} type="button">
            <span style={{ marginRight: 5, textTransform: 'uppercase' }}>
              {currentLanguage.value}
            </span>
            {isOpened ? (
              <div
                style={{
                  transform: 'rotate(180deg)',
                  paddingBottom: 6,
                  filter: shouldBeLight ? 'invert()' : '',
                }}
              >
                <BottomArrow />
              </div>
            ) : (
              <div
                style={{
                  filter: shouldBeLight ? 'invert()' : '',
                  paddingBottom: 6,
                }}
              >
                <BottomArrow />
              </div>
            )}
          </button>

          {isOpened && (
            <div className="options-list-container">
              {options.map((option) => (
                <button
                  key={generateId()}
                  className={
                    currentLanguage.value === option.value
                      ? 'option-item option-item-active'
                      : 'option-item'
                  }
                  type="button"
                  onClick={() => onValueClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dropdown;
