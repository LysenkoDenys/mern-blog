import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { Spinner } from 'flowbite-react';

const AppLoader = () => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <Spinner size="xl" aria-label="Loading app..." />
    <p className="mt-3 text-lg font-semibold text-gray-700">
      Loading... please, wait...
    </p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoader />}>
        <ThemeProvider>
          <Suspense fallback={<AppLoader />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
