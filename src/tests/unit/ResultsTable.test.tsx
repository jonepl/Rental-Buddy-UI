import { render, screen } from '@testing-library/react';
import ResultsTable from '../../components/ResultsTable';

test('renders table headers', () => {
  render(<ResultsTable />);
  expect(screen.getByText(/address/i)).toBeInTheDocument();
  expect(screen.getByText(/price/i)).toBeInTheDocument();
  expect(screen.getByText(/beds/i)).toBeInTheDocument();
  expect(screen.getByText(/baths/i)).toBeInTheDocument();
  expect(screen.getByText(/sqft/i)).toBeInTheDocument();
});
