import { StatusCodes } from 'http-status-codes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { tokenDataRequest } from '../../../../api/tokens.service';
import { SERVER_ERROR_MESSAGE } from '../../../../constants/messages';
import { IRootState } from '../../../../store';
import { tokenDataSuccess } from '../../../../store/actions/token';
import './style.scss';
import TokensLayout from './TokensLayout';
import TokensMobileLayout from './TokensLayout.mobile';

export type chartRangeType = '1m' | '5m' | '30m' | '1h' | '4h' | '1d';
export const chartRangeTypes: chartRangeType[] = ['1m', '5m', '30m', '1h', '4h', '1d'];

const Tokens = () => {
  // const tokensCount = 15000.72501;
  // const dollarsPerToken = 0.015;
  // const changesLastDay = 0.25;

  const dispatch = useDispatch();

  const [currentTokenRange, setCurrentTokenRange] = useState<chartRangeType>('5m');

  const getTokenData = (range: chartRangeType) =>
    tokenDataRequest(range)
      .then((response) => {
        if (response.response && response.status === StatusCodes.OK) {
          dispatch(tokenDataSuccess(response.response));
        }
      })
      .catch(() => toast(SERVER_ERROR_MESSAGE));

  useEffect(() => {
    getTokenData(currentTokenRange);
  }, [currentTokenRange]);

  const tokenData = useSelector((state: IRootState) => state.token.tokenData);

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <TokensMobileLayout
      tokenData={tokenData}
      setCurrentTokenRange={setCurrentTokenRange}
      currentTokenRange={currentTokenRange}
    />
  ) : (
    <TokensLayout
      tokenData={tokenData}
      setCurrentTokenRange={setCurrentTokenRange}
      currentTokenRange={currentTokenRange}
    />
  );
};

export default Tokens;
