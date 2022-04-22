import { ICSSObject } from '../interfaces/style';

export default <ICSSObject>{
  fdRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  fdRowAiCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fdRowAiCenterJcBetween: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fdColumnAiEnd: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  fdColumnAiCenterJcCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fdColumnAiCenterJcBetween: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fdColumnJcEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonReset: {
    fontFamily: 'Gilroy',
    fontWeight: 'normal',
    border: 'none',
    backgroundColor: 'transparent',
  },
  centeredBlockColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
