import assign from 'lodash/object/assign';
import { RESOURCE } from '@recipher/resource';

export const CHANGE = 'recipher/user/password/CHANGE';
export const SUCCESS = 'recipher/user/password/SUCCESS';
export const FAILED = 'recipher/user/password/FAILED';

const ERRORS = {
  422: 'You have entered an invalid password'
};

const initialState = { error: null, changing: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case CHANGE:
    return assign({}, state, { changing: true });
  case SUCCESS:
    return assign({}, state, { error: null, changing: false });
  case FAILED:
    return assign({}, state, { error: ERRORS[action.payload.status], changing: false });
  default:
    return state;
  }
};

export function changePassword(user, data) {
  return {
    [RESOURCE]: {
      types: [ CHANGE, SUCCESS, FAILED ]
    , payload: {
        url: `/users/${user.id}/password`
      , method: 'post'
      , data: { password: data }
      }
    }
  };
};
