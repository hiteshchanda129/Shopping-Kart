import { ActionType } from "../contants/action-type"


const initialstate ={
    product :[]
};

export const productReducer =(state =initialstate, {type , payload})=>{
    switch (type){
        case ActionType.SET_PRODUCTS:
            return {...state , products : payload};
        default:
            return state    
    }
}

export const selectedProductReducer =(state={}, {type , payload})=>{
    switch(type){
        case ActionType.SELECETED_PRODUCT:
            return {...state , ...payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}    
        default:
            return state    
    }
}