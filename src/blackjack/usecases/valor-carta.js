/**
 * Obtener el valor de la carta extraida
 * @param {String} carta Carta extraida del deck
 * @returns {Number} Es el valor de la carta
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
