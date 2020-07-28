import produce from 'immer';
const GET_MESSAGE = "GET_MESSAGE";

export const get_message = (data) => ({
    type: GET_MESSAGE, data
})

const initState = {
    loading: false,
    data: [],
    error: false,
    pageNo: 1,
}

export default function disaster(state = initState, action) {
    switch (action.type) {
        case GET_MESSAGE:
            console.log("푸쉬데이터");
            const pushData = action.data;
            console.log(pushData);
            return produce(
                state,draft =>{
                    draft.data.push(pushData);
                    draft.pageNo = draft.pageNo+1;
                }
            )
        default:
            return state;

    }
}