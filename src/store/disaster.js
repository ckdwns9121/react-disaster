import produce from 'immer';
const GET_MESSAGE = "GET_MESSAGE";
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_ERROR = 'GET_MESSAGE_ERROR';

export const get_message = () => ({
    type: GET_MESSAGE
})

export const get_message_success = (data) => ({
    type: GET_MESSAGE_SUCCESS, data
})
export const get_message_error = () => ({
    type: GET_MESSAGE_ERROR
})
const initState = {
    loading: false,
    data: [],
    error: false,
}

export default function disaster(state = initState, action) {
    switch (action.type) {
        case GET_MESSAGE:
            return produce(
                state, draft => {
                    draft.loading = true;
                    draft.error = false;
                }
            )
        case GET_MESSAGE_SUCCESS:
            const pushData = action.data;
            return produce(
                state, draft => {
                    draft.data.push(pushData);
                    draft.loading = false;
                    draft.error = false;
                }
            )
        case GET_MESSAGE_ERROR:
            return produce(
                state, draft => {
                    draft.loading = false;
                    draft.error = true;
                }
            )
        default:
            return state;

    }
}
