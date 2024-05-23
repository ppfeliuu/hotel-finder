// __tests__/Home.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from '../app/login/page';
import Home from '../app/page';

// Mock de LoginPage
jest.mock('../app/login/page', () => {
  return jest.fn(() => <div>Login</div>);
});

describe('Home Component', () => {
  test('renders LoginPage with correct props', () => {
    const { getByText } = render(<Home />);
    
    // Verifica que LoginPage se haya renderizado correctamente
    expect(getByText('Login')).toBeTruthy();
    
    // Verifica que LoginPage haya sido llamado con los props correctos
    expect(LoginPage).toHaveBeenCalledWith({ loading: false, session: null }, {});
  });
});
