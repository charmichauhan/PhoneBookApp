import {persons} from '../component/Persons'

export const UPDATE_DATA = 'update-data';
export const ADD_DATA = 'add-data';
export const DELETE_DATA = 'delete-data';
export const ALL_DATA = 'allData-data';

export function updateData(person) {
    return { type: UPDATE_DATA, person };
}

export function addData() {
    return { type: ADD_DATA };
}
export function deleteData(id) {
    return { type: DELETE_DATA ,id};
}
export function allData() {
    return { type: ALL_DATA, payload: persons
    };
}