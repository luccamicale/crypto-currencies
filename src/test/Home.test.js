import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/homeComp';
import store from '../redux/configureStore';

describe('Testing Cryptos page', () => {
  it('Should match the Cryptos snap', () => {
    const companies = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(companies).toMatchSnapshot();
  });
});
