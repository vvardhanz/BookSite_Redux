//state argument is not application state, its only a state.
// this reducer is responsible for the

export default function(state = null, action) {
    switch(Action.type) {

     case 'BOOK_SELECTED' :
         return action.payload;
    }

  return state;
}
