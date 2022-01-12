const initialState = {
    status: 'idle',
    entries: {}
};

export default function authReducer(state = initialState, action){
    const data = action.payload;
    switch (action.type) {
        case 'auth/newUserAdded':
            return {
                ...state,
                entries:{
                    ...state.entries,
                    data
                }
            }
        case 'auth/userRemoved':
            break;
        
        case 'auth/loadUser':
            break;
        
        case 'auth/error':
            return state;
        default:
            return state;
    }
}