// Header.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders with correct title', () => {
    const { getByText } = render(<Header onSortChange={() => {}} />);
    const titleElement = getByText('Hoteles');
    expect(titleElement).toBeTruthy();
  });

  test('calls onSortChange when select value changes', () => {
    const mockSortChange = jest.fn();
    const { getByRole } = render(<Header onSortChange={mockSortChange} />);
    const sortSelect = getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'price-desc' } });
    expect(mockSortChange).toHaveBeenCalledWith('price-desc');
  });
});
