import { INCREMENT_COUNTER } from '../actions/counterActions';

const counterReducer = (state = { value: 0 }, action: any) => {
    switch (action.type) {
    case INCREMENT_COUNTER:
        return { ...state, value: state.value + 1 };
    default:
        return { ...state };
    }
};

export default counterReducer;
