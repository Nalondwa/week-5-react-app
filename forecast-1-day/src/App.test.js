import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub link', () => {
  render(<App />);
  const linkElement = screen.getByText(/open-sourced on GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
