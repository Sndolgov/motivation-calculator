import {ADD_INCOME_POINT, DELETE_INCOME_POINT, UPDATE_INCOME_POINTS} from "../../store/actions/actionTypes";

const initialState = {
    id: 2,
    headers: [
        {title: 'Составляющая дохода', field: 'Revenue component'},
        {title: 'Вес,%', field: 'relevance', type: 'numeric',headerStyle: {textAlign: 'left', flexDirection: 'inherit'}, cellStyle: {textAlign: 'left'}}
    ],
    points: {1: {id: 1, 'Revenue component': 'KPI', relevance: 10}}
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INCOME_POINT:
            let pointsAdd = {...state.points};
            let newPoint = action.point;
            newPoint['id'] = state.id;
            pointsAdd[state.id] = newPoint;
            return {
                ...state,
                points: pointsAdd,
                id: ++state.id
            };
        case UPDATE_INCOME_POINTS:
            let pointsUpd = {...state.points};
            pointsUpd[action.point.id] = action.point;
            return {
                ...state,
                points: pointsUpd,
            };
        case DELETE_INCOME_POINT:
            let pointsDel = {...state.points};
            delete pointsDel[action.id];
            return {
                ...state,
                points: pointsDel,
            };
        default:
            return state;
    }
}