const initialState = {
    experts : []
}

export default function(state = initialState, action) 
{
    console.log('action throw =>', action);
    switch(action.type) {
        case "FETCH_CUSTOMER" : 
            return {...state, experts : ['Arul', 'Murugavel', 'Priya']}
        default :
            return state;
    }
}