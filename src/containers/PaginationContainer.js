import { connect } from 'react-redux';
import { setPagination } from '../actions';
import Pagination   from '../components/Pagination';

const getRealStudentList = (students, filter)=>{
    return students.filter((student)=>{
        if(!filter.name){
            return student;
        }else if(student.name.indexOf(filter.name)>=0){
            return student;
        }
    });
    // return students;
};

const mapStateToProps = (state)=>{
    let student_total = getRealStudentList(state.students,state.searchFilter).length;
    return {
        // pagination: state.pagination,
        index: state.pagination.index,
        per: state.pagination.per,
        // total: state.students.length
        total: student_total
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onHandlePaginate:(index)=>{
            dispatch(setPagination({index: index}))
        }
    }
};

const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default PaginationContainer;