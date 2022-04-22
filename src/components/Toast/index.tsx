import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { COLORS } from '../../constants/colors';
import { IRootState } from '../../store';

interface IProps {
  title: string;
  message: string;
  onCancelClick: () => void;
  onConfirmClick: () => void;
  confirmText?: string;
  cancelText?: string;
}

const Toast = ({
  title,
  message,
  onCancelClick,
  onConfirmClick,
  confirmText,
  cancelText,
}: IProps) => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onCancelClick();
      }
    });

    return () => {
      onCancelClick();
      window.removeEventListener('keydown', onCancelClick, true);
    };
  }, []);

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.WHITE,
          borderRadius: 10,
          padding: 30,
          margin: '0 20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: 'black',
            marginBottom: 16,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#878691',
            marginBottom: 16,
          }}
        >
          {message}
        </span>
        <div>
          <button
            style={{
              padding: isDeviceMobile ? '14px 30px' : '17px 60px',
              border: '1px solid #323EC6',
              backgroundColor: 'transparent',
              borderRadius: 10,
              marginRight: 20,
              cursor: 'pointer',
            }}
            onClick={onCancelClick}
            type="button"
          >
            {cancelText || 'Cancel'}
          </button>
          <button
            style={{
              padding: isDeviceMobile ? '14px 30px' : '17px 60px',
              border: '1px solid #323EC6',
              backgroundColor: '#323EC6',
              borderRadius: 10,
              color: COLORS.WHITE,
              cursor: 'pointer',
            }}
            onClick={onConfirmClick}
            type="button"
          >
            {confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
