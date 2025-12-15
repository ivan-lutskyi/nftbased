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
  const processPolyfill = { env: { NODE_ENV: 'development' } };

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

// Firebase disabled to prevent network requests
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getStorage, ref } from 'firebase/storage';
import Router from './router';

import store from './store';
import { setDeviceType } from './store/actions/core';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCB6jh0Z2EkUB-f3G1s2d5MlUDdqu1geIM',
  authDomain: 'nftbased-net.firebaseapp.com',
  projectId: 'nftbased-net',
  storageBucket: 'nftbased-net.appspot.com',
  messagingSenderId: '329698601727',
  appId: '1:329698601727:web:3d56c4b08a1991fee9faca',
  measurementId: 'G-T6V42VV6K2',
};

// Initialize Firebase - DISABLED
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();

// Create a storage reference from our storage service
// const storageRef = ref(storage);
// const imagesRef = ref(storage, 'gs://nftbased-net.appspot.com/');

// export { app, analytics, storage, storageRef, imagesRef };

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
    <App />
  </Provider>,
  document.getElementById('root'),
);
