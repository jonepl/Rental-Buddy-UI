import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../../components/SearchBar';

test('renders address input and buttons', async () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const onClear = jest.fn();
  render(<SearchBar value="" onChange={onChange} onSubmit={onSubmit} onClear={onClear} />);
  expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText(/address/i), '123 Main St');
  expect(onChange).toHaveBeenCalled();
});
