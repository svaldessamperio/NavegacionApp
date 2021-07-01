import { AuthState } from './AuthContext';

type AuthAction = 
        {type: 'SignIn'}
    |   {type: 'ChangeFavIcon', payload: string}
    |   {type: 'ChangeUserName', payload: string};

export const authReducer = (state:AuthState, action:AuthAction): AuthState => {

    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                isLogIn: true,                
                userName: 'No-User-Name',
            }
            break;
        case 'ChangeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
            break;
        case 'ChangeUserName':
            return {
                ...state,
                userName: action.payload
            }
            break;
        default:
            return state;
    }
}