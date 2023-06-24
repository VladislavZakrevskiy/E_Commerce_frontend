import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.css'
import { store } from './app/store/store.ts'
import { Provider } from 'react-redux';
import  './app/i18next.ts'
import LoadingModal from './features/LoadingModal.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingModal isLoading/>}>
        <App/>
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
