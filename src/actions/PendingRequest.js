import * as types from './constants';

export const pending = (status) => {
	return {
    	type: types.SHARED_ACTIONS.PENDING_REQUEST,
    	payload: {
    		pending: status,
    	}
    }
}