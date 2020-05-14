import {ADD_INCOME_POINT, DELETE_INCOME_POINT, UPDATE_INCOME_POINTS} from "../../store/actions/actionTypes";

export function addIncomePoint(point) {
    return {
        type: ADD_INCOME_POINT,
        point
    }
}
export function updateIncomePoints(point) {
    return {
        type: UPDATE_INCOME_POINTS,
        point
    }
}
export function deleteIncomePoint(id) {
    return {
        type: DELETE_INCOME_POINT,
        id
    }
}
