import { Profiler, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Router from './router';
import './index.scss';
import './styles/_shared.scss';
import './assets/fonts/Gilroy/stylesheet.css';
import './assets/fonts/Suranna/stylesheet.css';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import { setDeviceType } from './store/actions/core';

const App = () => {
  const isCurrentDeviceMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const dispatch = useDispatch();

  dispatch(setDeviceType(isCurrentDeviceMobile ? 'MOBILE' : 'DESKTOP'));

  return (
    <div>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        toastStyle={{
          border: '1px solid #8245E5',
          backgroundColor: '#090B2F',
        }}
        pauseOnFocusLoss={false}
        style={{
          marginTop: 67,
          marginRight: 60,
        }}
        hideProgressBar
      />
      <Router />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <Profiler id="MyComponent" onRender={() => {}}>
      <Provider store={store}>
        <App />
      </Provider>
    </Profiler>
  </StrictMode>,
  document.getElementById('root'),
);
