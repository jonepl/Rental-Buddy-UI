import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../../components/SearchBar';

test('renders address input and buttons', async () => {
  render(<SearchBar />);
  expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText(/address/i), '123 Main St');
  expect(screen.getByDisplayValue('123 Main St')).toBeInTheDocument();
});
