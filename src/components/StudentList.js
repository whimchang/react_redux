import React from 'react'
import PropTypes from 'prop-types'
import Student from './Student'

const StudentList = ({ students, onStudentDelete }) => (
    <ul>
        {students.map(student => (
            <Student key={student.id} student={student} onHandleStudentDelete={() => onStudentDelete(student.id)} />
        ))}
    </ul>
);

StudentList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            grade: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onStudentDelete: PropTypes.func.isRequired
};

export default StudentList;