import { createContext, useState, useContext } from 'react';

interface MenuContextData {
  selectedGenreId: number;
  handleClickButton(indice: number): void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(indice: number) {
    setSelectedGenreId(indice);
  }

  return (
    <MenuContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  return context;
}