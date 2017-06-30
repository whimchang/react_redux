import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({index, per, total, onHandlePaginate})=> (
    <div className="pagination">
        共有<span>{total}</span>项,
        每页显示<span>{per}</span>项,
        当前显示第<span>{total===0?0:index}</span>/
        <span>{Math.ceil(total/per)}</span>页
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{onHandlePaginate(index-1)}} disabled={index<=1}>上一页</button>
        <button onClick={()=>{onHandlePaginate(index+1)}} disabled={index>=Math.ceil(total/per)}>下一页</button>
        {/*<input type="text" ref={node=>}/>*/}
    </div>
);

Pagination.propsType = {
    index: PropTypes.number.isRequired,
    per: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onHandlePaginate: PropTypes.func.isRequired
};

export default Pagination;