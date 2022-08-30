import { createContext } from "react";

// Datos
const utils = {
  has: {
    collide: false,
  },
  // cameraPosition: {
  //   x: 20,
  //   y: -20,
  //   z: -70,
  // },
  objetivePosition: {
    x: 0,
    y: 0,
    z: 0, 
    // x: 20,
    // y: -20,
    // z: -70,
  },
  // isGameActive: false,
};

// Tipo de dato - componente
type colliderContextProviderProps = {
  children: React.ReactNode;
};

// Para los hijos
export const utilsContext = createContext(utils);


// Para el padre
export const UtilsContextProvider = ({
  children,
}: colliderContextProviderProps) => {
  return (
    <utilsContext.Provider value={utils}>
      {children}
    </utilsContext.Provider>
  );
};
