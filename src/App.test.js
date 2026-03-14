// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MLInsight title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MLInsight/i);
    expect(titleElement).toBeInTheDocument();
});
