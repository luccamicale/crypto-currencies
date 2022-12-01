import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../components/Navbar';
import store from '../redux/configureStore';

describe('Testing Navbar page', () => {
  it('Should match the navbar snap', () => {
    const companies = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(companies).toMatchSnapshot();
  });
  it('Should have text Crypto', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Crypto')).toBeInTheDocument();
  });
});
