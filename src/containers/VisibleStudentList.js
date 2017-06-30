import { connect }  from 'react-redux';
import { deleteStudent }  from '../actions';

import StudentList from '../components/StudentList';

const getRealStudentList = (students, filter,pagination)=>{
    let paginationList = students.filter((student)=>{
        if(!filter.name){
            return student;
        }else if(student.name.indexOf(filter.name)>=0){
            return student;
        }
    });
    return paginationList.filter((student, index)=>{
        if(index >= (pagination.index-1)*pagination.per &&
            index<pagination.index*pagination.per){
            return student;
        }

    });
    // return students;
};

const mapStateToProps = (state)=>{
    return {
        students: getRealStudentList(state.students,state.searchFilter, state.pagination)
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onStudentDelete: id=>{dispatch(deleteStudent(id))}
    }
};

const VisibleStudentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList);

export default VisibleStudentList;