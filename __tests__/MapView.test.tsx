import React from 'react';
import { render } from '@testing-library/react';
import MapView from '../components/MapView';

describe('MapView', () => {
  const mockHotels = [
    {
      name: 'Hotel A',
      coordinates: {
        longitude: 10,
        latitude: 20,
      },
      finalPrice: 100,
      star: 3,
    },
    {
      name: 'Hotel B',
      coordinates: {
        longitude: 30,
        latitude: 40,
      },
      finalPrice: 200,
      star: 4,
    },
  ];

  it('renders without crashing', () => {
    render(<MapView hotels={[]} />);
  });

  /* it('renders the map container', () => {
    const { getByTestId } = render(<MapView hotels={[]} />);
    const mapContainer = getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });

  it('renders markers for each hotel', () => {
    const { getByText } = render(<MapView hotels={mockHotels} />);
    mockHotels.forEach((hotel) => {
      const hotelName = getByText(hotel.name);
      expect(hotelName).toBeInTheDocument();
    });
  }); */
});