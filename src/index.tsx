import * as ReactDOMClient from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';


const container = document.getElementById("root");
export const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);