import * as types from '../actions/constants';

export const Pending = (state = [], action) => {
	switch (action.type){

		case types.SHARED_ACTIONS.PENDING_REQUEST:
			return action.payload.pending;

		default:
			return state;
	}
}

export default Pending;