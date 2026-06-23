import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render the header', () => {
    render(<App />);
    expect(screen.getByText(/VS Code AI Team/i)).toBeInTheDocument();
  });

  it('should render feature cards', () => {
    render(<App />);
    expect(screen.getByText(/File Explorer/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Agents/i)).toBeInTheDocument();
    expect(screen.getByText(/Router/i)).toBeInTheDocument();
  });

  it('should render getting started section', () => {
    render(<App />);
    expect(screen.getByText(/Getting Started/i)).toBeInTheDocument();
  });
});
