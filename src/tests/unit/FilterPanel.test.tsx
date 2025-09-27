import { render, screen } from '@testing-library/react';
import FilterPanel from '../../components/FilterPanel';

test('renders filter inputs with defaults', () => {
  render(<FilterPanel />);
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/beds/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/baths/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sqft/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/radius/i)).toHaveDisplayValue('5');
  expect(screen.getByLabelText(/days old/i)).toBeInTheDocument();
});
