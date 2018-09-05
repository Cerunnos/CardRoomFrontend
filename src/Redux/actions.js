export const SET_DECK = 'SET_DECK'
export const SET_HAND = 'SET_HAND'
export const SET_SELECTED_CARD = 'SET_SELECTED_CARD'
export const SET_PLAYER_1_LAST_SIX = 'SET_PLAYER_1_LAST_SIX'

export function setDeck(deck){
  return {type: SET_DECK, deck}
}

export function setHand(hand){
  return {type: SET_HAND, hand}
}

export function setSelectedCard(card){
  return {type: SET_SELECTED_CARD, card}
}

export function setPlayer1LastSix(object){
  return {type: SET_PLAYER_1_LAST_SIX, object}
}
