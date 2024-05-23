import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterSidebar from '../components/FilterSidebar';

describe('FilterSidebar', () => {
  const filters = [
    {
      title: 'Filter 1',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ],
    },
    {
      title: 'Filter 2',
      options: [
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
      ],
    },
  ];

  it('renders filter options correctly', () => {
    const { getByTestId } = render(<FilterSidebar filters={filters} onFilterChange={() => {}} />);
  
    filters.forEach((filter) => {
      filter.options.forEach((option) => {
        const checkbox = getByTestId(`checkbox-${option.value}`);
        expect(checkbox).toBeInTheDocument();
        
      });
    });
  });

  it('calls onFilterChange with correct arguments when a second checkbox is clicked', () => {
    const onFilterChange = jest.fn();
    const { getByTestId } = render(<FilterSidebar filters={filters} onFilterChange={onFilterChange} />);
  
    const secondCheckbox = getByTestId(`checkbox-${filters[0].options[1].value}`);
    fireEvent.click(secondCheckbox);
  
    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onFilterChange).toHaveBeenCalledWith(filters[0].title, filters[0].options[1].value, true);
  });
});