//students
import { combineReducers } from 'redux';

const generateMockData = (list)=>{
    if(list.length==0){
        let realStudents = [];
        Array(10).fill(0).forEach((item,i)=>{
            realStudents.push({
                id: i+1,
                name: 'Tom'+i,
                age: 11+i,
                grade: i%4 + 1
            })
        });
        return realStudents;
    }else{
        return list;
    }

};

const students = (state = [],action)=>{
    switch (action.type){
        case "DELETE_STUDENT":
            return state.filter((student)=>{
               if(student.id != action.id){
                   return student;
               }
            });
        case "SORT":
            return state.slice().sort((student1,student2)=>{
               return action.sort.order === 'up'?
                   (student1[action.sort.item] - student2[action.sort.item]):
                   (student2[action.sort.item] - student1[action.sort.item])
            });
        default:
            return generateMockData(state);
    }
};

const searchFilter = (state = {}, action)=>{
    switch (action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

const pagination = (state={per: 5, index: 1},action)=>{
    switch (action.type){
        case "PAGINATE":
            // return action.pagination;
            return Object.assign({},action.pagination,{per: 5});
        default:
            return state;
    }
};

const studentListReducer = combineReducers({
    students,
    searchFilter,
    pagination
});

export default studentListReducer;
