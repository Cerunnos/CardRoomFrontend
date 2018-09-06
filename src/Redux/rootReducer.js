const defaultState={
  deck:[],
  hand:[],
  discard:[],
  selectedCard:{},
  player1LastSix:{pos1:{},pos2:{},pos3:{}}
}

const rootReducer=(state=defaultState,action)=>{
  switch(action.type){
    case 'SET_DECK':
      return {...state,deck:action.deck}
    case 'SET_HAND':
      return {...state,hand:action.hand}
    case 'SET_SELECTED_CARD':
      return {...state,selectedCard:action.card}
    case 'SET_PLAYER_1_LAST_SIX':
      return {...state,player1LastSix:action.object}
    case 'CLEAR_SELECTED_CARD':
      return {...state,selectedCard:{}}
    default:
      return state
  }
}

export default rootReducer
