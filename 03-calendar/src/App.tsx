import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import './styles/components/app.scss';
import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
