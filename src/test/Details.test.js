import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/detailsComp';
import store from '../redux/configureStore';

describe('Testing Cryptos page details', () => {
  it('Should match the Cryptos snap details', () => {
    const companies = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(companies).toMatchSnapshot();
  });
});
