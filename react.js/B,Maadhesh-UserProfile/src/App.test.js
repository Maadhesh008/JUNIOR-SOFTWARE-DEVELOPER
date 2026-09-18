import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('displays and updates the user name in real time', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/profile name/i);

  expect(screen.getByRole('heading', { name: 'John Doe' })).toBeInTheDocument();

  fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });

  expect(screen.getByRole('heading', { name: 'Jane Smith' })).toBeInTheDocument();
});
