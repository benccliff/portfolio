import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ben/);
  expect(linkElement).toBeInTheDocument();
});

test('renders my profession', () => {
  render(<App />);
  const linkElement = screen.getByText(/Software Engineer/);
  expect(linkElement).toBeInTheDocument();
})
