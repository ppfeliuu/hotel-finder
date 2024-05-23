import React from 'react';
import { render } from '@testing-library/react';
import HotelCard from '../components/HotelCard';

describe('HotelCard', () => {
  const hotel = {
    name: 'Test Hotel',
    finalPrice: 100,
    originalPrice: 150,
    star: 4,
    features: ['Free WiFi', 'Breakfast included'],
    image: 'test-image.jpg',
    coordinates: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
  };

  it('renders hotel name', () => {
    const { getByText } = render(<HotelCard hotel={hotel} />);
    expect(getByText('Test Hotel')).toBeTruthy();
  });

  it('renders hotel image', () => {
    const { getByAltText } = render(<HotelCard hotel={hotel} />);
    const img = getByAltText('Test Hotel') as HTMLImageElement;
    expect(img.src).toContain('test-image.jpg');
  });

  it('renders hotel star rating', () => {
    const { getByText } = render(<HotelCard hotel={hotel} />);
    expect(getByText('⭐⭐⭐⭐')).toBeTruthy();
  });

  it('renders hotel features', () => {
    const { getByText } = render(<HotelCard hotel={hotel} />);
    expect(getByText('Free WiFi')).toBeTruthy();
    expect(getByText('Breakfast included')).toBeTruthy();
  });

  it('renders hotel prices', () => {
    const { getByText } = render(<HotelCard hotel={hotel} />);
    expect(getByText('$100 pp')).toBeTruthy();
    expect(getByText('$150 pp')).toBeTruthy();
  });

  it('renders view details button', () => {
    const { getByText } = render(<HotelCard hotel={hotel} />);
    expect(getByText('View details')).toBeTruthy();
  });
});