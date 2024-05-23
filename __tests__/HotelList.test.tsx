import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HotelList from '../components/HotelList';

describe('HotelList component', () => {
  const hotels = [
    {
      name: 'Hotel A',
      finalPrice: 100,
      originalPrice: 120,
      star: 4,
      features: ['Feature 1', 'Feature 2'],
      image: 'hotel-a.jpg',
      coordinates: {
        latitude: 123,
        longitude: 456,
      },
    },
    {
        name: 'Hotel B',
        finalPrice: 150,
        originalPrice: 180,
        star: 5,
        features: ['Feature 3', 'Feature 4'],
        image: 'hotel-b.jpg',
        coordinates: {
            latitude: 789,
            longitude: 123,
        },
    },
  ];

  it('renders hotel cards correctly', () => {
    const { getByText } = render(
      <HotelList hotels={hotels} onLoadMore={() => {}} hasMore={false} />
    );

    expect(getByText('Hotel A')).toBeInTheDocument();
    expect(getByText('Hotel B')).toBeInTheDocument();
  });

  it('calls onLoadMore when "Mostrar más" button is clicked', () => {
    const onLoadMoreMock = jest.fn();
    const { getByText } = render(
      <HotelList hotels={hotels} onLoadMore={onLoadMoreMock} hasMore={true} />
    );

    fireEvent.click(getByText('Mostrar más'));
    expect(onLoadMoreMock).toHaveBeenCalled();
  });
});