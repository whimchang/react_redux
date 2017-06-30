import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({search, onSubmitFilter}) =>(
    <div>
        <label>姓名&nbsp;&nbsp;</label>
        <input type="text" onChange={(e)=>{onSubmitFilter({name: e.target.value})}}/>
    </div>
);

Filter.propsType = {
    search: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        grade: PropTypes.number
    }),
    onSubmitFilter: PropTypes.func.isRequired
};

export default Filter;