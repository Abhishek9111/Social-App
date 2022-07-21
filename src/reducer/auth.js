import { SET_USER,IS_AUTHENTICATED } from '../action/action.types'

const initalState =  {
    user: null,
    loading: true,
    isAuthenticated: false
}

export default (state=initalState,action)=>{

    switch (action.type) {
        case SET_USER:
            
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        case IS_AUTHENTICATED:
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        default:
            return state;
    }

}