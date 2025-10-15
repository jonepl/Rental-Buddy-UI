import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../../App';
import { postComps } from '../../api/client';

jest.mock('../../api/client', () => ({
  postComps: jest.fn(),
}));

function renderApp() {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
}

afterEach(() => {
  (postComps as jest.Mock).mockReset();
  jest.restoreAllMocks();
});

test('renders core sections', () => {
  renderApp();
  expect(screen.getByText(/rental buddy/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
  expect(screen.getByText(/export csv/i)).toBeInTheDocument();
});

test('submit triggers API and renders results in table', async () => {
  const mockResponse = {
    input: {
      resolved_address: '123 Main St, Austin, TX',
      latitude: 30.2672,
      longitude: -97.7431,
      bedrooms: 2,
      bathrooms: 1.5,
      radius_miles: 5.0,
      days_old: '*:270',
    },
    comps: [
      {
        id: 'c1',
        address: '789 Pine St, Austin, TX 78703',
        city: 'Austin',
        state: 'TX',
        zip_code: '78703',
        county: 'Travis',
        longitude: -97.75,
        latitude: 30.27,
        price: 2300,
        bedrooms: 2,
        bathrooms: 1.5,
        square_footage: 900,
        distance_miles: 1.0,
      },
    ],
  };

  (postComps as jest.Mock).mockResolvedValueOnce(mockResponse);

  renderApp();

  await userEvent.type(screen.getByLabelText(/address/i), '123 Main St');
  await userEvent.click(screen.getByRole('button', { name: /search/i }));

  expect(await screen.findByText(/789 Pine St/i)).toBeInTheDocument();
  expect(await screen.findByText(/2300/)).toBeInTheDocument();
});

test('shows empty state when API returns no comps', async () => {
  const mockResponse = {
    input: {
      resolved_address: 'no results',
      latitude: 0,
      longitude: 0,
      radius_miles: 5,
    },
    comps: [],
  };

  (postComps as jest.Mock).mockResolvedValueOnce(mockResponse);

  renderApp();

  await userEvent.type(screen.getByLabelText(/address/i), 'nowhere');
  await userEvent.click(screen.getByRole('button', { name: /search/i }));

  expect(await screen.findByText(/No results found/i)).toBeInTheDocument();
});

test('shows error state when API fails', async () => {
  (postComps as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch comps: 500'));

  renderApp();

  await userEvent.type(screen.getByLabelText(/address/i), 'error addr');
  await userEvent.click(screen.getByRole('button', { name: /search/i }));

  expect(await screen.findByText(/Error:/i)).toBeInTheDocument();
});
