import { AuthState } from './AuthContext';

type AuthAction = {
    type: 'SignIn'
};

export const authReducer = (state:AuthState, action:AuthAction): AuthState => {

    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                isLogIn: true,                
                userName: 'No-User-Name',
            }
            break;
        default:
            return state;
    }
}