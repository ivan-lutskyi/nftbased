import { Provider, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './index.scss';
import './styles/_shared.scss';
import './assets/fonts/Gilroy/stylesheet.css';
import './assets/fonts/Suranna/stylesheet.css';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

// Polyfill for process (needed for some dependencies)
// Must be defined at the very top before any other code
(function () {
  const processPolyfill = {
    env: {
      NODE_ENV:
        process?.env?.NODE_ENV ||
        (typeof window !== 'undefined' && (window as any).process?.env?.NODE_ENV) ||
        'production',
    },
  };

  // Set process on all possible global objects
  if (typeof window !== 'undefined') {
    (window as any).process = processPolyfill;
  }
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).process = processPolyfill;
  }
  if (typeof global !== 'undefined') {
    (global as any).process = processPolyfill;
  }
  // Also set it directly on the global object using Function constructor
  try {
    const globalObj = Function('return this')();
    if (globalObj) {
      (globalObj as any).process = processPolyfill;
    }
  } catch (e) {
    // Fallback if Function constructor is blocked
  }

  // Define process as a global variable (for webpack/bundler access)
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, 'process', {
      value: processPolyfill,
      writable: true,
      configurable: true,
    });
  }
})();

// Firebase disabled - portfolio template (no backend required)
import Router from './router';
import ErrorBoundary from './components/ErrorBoundary';
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

import ReactDOM from 'react-dom';
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
