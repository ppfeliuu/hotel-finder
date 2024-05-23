// Header.tsx
import React from 'react';
import { HeaderContainer, SortSelect } from '../styles/components/HeaderStyled';

// Definición de tipos
interface HeaderProps {
  onSortChange: (sortValue: string) => void;
}

// Componente Header
const Header: React.FC<HeaderProps> = ({ onSortChange }) => {
  return (
    <HeaderContainer>
      <h1>Hoteles</h1>
      <SortSelect onChange={(e) => onSortChange(e.target.value)}>
        <option value="price-asc">Precio: Bajo a Alto</option>
        <option value="price-desc">Precio: Alto a Bajo</option>
      </SortSelect>
    </HeaderContainer>
  );
};

export default Header;
