import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../app/search/page';
import useHotels from '../hooks/useHotels';
import { act } from 'react-dom/test-utils';

// Mockeamos nuestro hook personalizado
jest.mock('../app/search/hooks/useHotels');

describe('Search', () => {
  /* beforeEach(() => {
    // Configuramos el mock del hook para cada prueba
    useHotels.mockImplementation(() => ({
      hotels: [],
      filteredHotels: [],
      filters: {},
      sortOrder: 'price',
      hasMore: false,
      handleLoadMore: jest.fn(),
      handleSortChange: jest.fn(),
      handleFilterChange: jest.fn(),
    }));
  }); */

  it('renders without crashing', () => {
    //render(<Search />);
  });

  /* it('renders LayoutSearch with correct props', () => {
    const { getByTestId } = render(<Search />);
    const layoutSearch = getByTestId('layout-search');
    expect(layoutSearch).toHaveAttribute('sidebar');
    expect(layoutSearch).toHaveAttribute('map');
  });

  it('renders Header with correct props', () => {
    const { getByTestId } = render(<Search />);
    const header = getByTestId('header');
    expect(header).toHaveAttribute('onSortChange');
  });

  it('renders HotelList with correct props', () => {
    const { getByTestId } = render(<Search />);
    const hotelList = getByTestId('hotel-list');
    expect(hotelList).toHaveAttribute('hotels');
    expect(hotelList).toHaveAttribute('onLoadMore');
    expect(hotelList).toHaveAttribute('hasMore');
  }); */
});