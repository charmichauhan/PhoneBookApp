import {UPDATE_DATA, ADD_DATA, DELETE_DATA, ALL_DATA} from '../actions/userActions'
import {persons} from '../component/Persons'

// export default function (initialState) {
//     return (state=initialState, action) => {
//         switch(action.type) {
//             case UPDATE_DATA:
//                 return Object.assign({}, state, { currentData: action.data });
//             case ADD_DATA:
//                 const text = state.currentData.trim();
//                 if (text) {
//                     let data = state.data.map(message => Object.assign({}, data));
//                     data.push({id: data.length + 1, text});
//                     return {
//                         data,
//                         currentData: ''
//                     };
//                 };
//             case DELETE_DATA:
//                 return Object.remove({}, state, { currentData: action.id });
//
//             default:
//                 return state;
//         }
//         const defaultState = {
//             persons: [],
//             byId:[]
//         }

        export default (state={persons}, action={}) => {
            switch (action.type) {
                case ALL_DATA: {
                    return {
                        ...state,
                        persons: action.payload
                    }
                }
                case UPDATE_DATA:
                    const updatedPersons = state.map(item => {
                        if(item.id === action.id){
                            return { ...item, ...action.payload }
                        }
                        return item
                    })
                    return updatedPersons;

                // case ADD_DATA:
                //     const text = state.persons.trim;
                //     if (text) {
                //         let data = state.persons.map(message => Object.assign({}, data));
                //         data.push({id: data.length + 1, text});
                //         return {
                //             data,
                //             currentPerson: ''
                //         };
                //     };

                case ADD_DATA: {
                    return {
                        ...state,
                        persons: [...state.persons, {id: Math.random(), ...action.person}]
                    }
                }
                case DELETE_DATA:
                    const prunedIds = state.persons.id.filter(item => {
                        return item !== action.id // return all the items not matching the action.id
                    })
                    return {
                        id: prunedIds,
                    }

                default:
                    return state;
            }
        }