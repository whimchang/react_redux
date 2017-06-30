import React from 'react';
import PropTypes from 'prop-types';

const Student = ({student, onHandleStudentDelete})=>(
    <div className="ResultItem">
        <span>{student.id}</span>
        <span><input type="checkbox"/></span>
        <span>{student.name}</span>
        <span>{student.age}</span>
        <span>{student.grade}</span>
        <span>
            <button onClick={()=>{onHandleStudentDelete(student.id)}}>delete</button>&nbsp;&nbsp;
            {/*<button onClick={()=>{this.handleItemDelete(item)}}>edit</button>&nbsp;&nbsp;*/}
        </span>
    </div>  
);

Student.propTypes = {
    onHandleStudentDelete: PropTypes.func.isRequired,
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        grade: PropTypes.number.isRequired
    }).isRequired
};

export default Student;