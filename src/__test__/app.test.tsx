import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '../app/store'; // Correct import!
import App from '../App';

jest.mock('axios');

describe('App', () => {
  test('renders the main heading', () => {  //does the app render the main heading
    const queryClient = new QueryClient(); // fetching and caching updating asynchronous data in react
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
    expect(screen.getByText(/E-Commerce Store/i)).toBeInTheDocument();
  });
});
test('matches the snapshot', () => { //does the app match the snapshot
  const queryClient = new QueryClient();
  const { asFragment } = render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});