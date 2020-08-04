/* Ninguém mexe no estado global diretamente,
 * mas por ações especiais passadas aqui
 */
import { createContext } from 'react';
export const AppContext = createContext();

/* state = estado anterior
 * action = ação a ser executada
 *       .type = tipo da ação
 *       .payload = valor dos nossos itens
 */
export const appReducer = (state, action) => {
  switch (action.type) {
    case 'createList':
      return { showList: action.payload };

    default:
      return state;
  }
};

export const initialState = {
  showList: new Array(),
};
