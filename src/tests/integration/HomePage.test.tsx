import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../../App';

test('renders core sections', () => {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );

  expect(screen.getByText(/rental buddy/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
  expect(screen.getByText(/export csv/i)).toBeInTheDocument();
});
