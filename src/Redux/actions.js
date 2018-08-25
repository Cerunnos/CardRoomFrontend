export const SET_DECK = 'SET_DECK'
export const SET_HAND = 'SET_HAND'

export function setDeck(deck){
  return {type: SET_DECK, deck}
}

export function setHand(hand){
  return {type: SET_HAND, hand}
}
