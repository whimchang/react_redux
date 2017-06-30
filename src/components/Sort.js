import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({onHandleSort})=>(
    <div className="ResultCap">
        <span>序号</span>
        <span><input type="checkbox"/>全选</span>
        <span>姓名</span>
        <span>年龄
            <i onClick={()=>{onHandleSort('age','up')}} style={{cursor: "pointer"}}>&nbsp;↑&nbsp;</i>&nbsp;&nbsp;
            <i onClick={()=>{onHandleSort('age','down')}} style={{cursor: "pointer"}}>&nbsp;↓&nbsp;</i>
        </span>
        <span>年级
            <i onClick={()=>{onHandleSort('grade','up')}} style={{cursor: "pointer"}}>&nbsp;↑&nbsp;</i>&nbsp;&nbsp;
            <i onClick={()=>{onHandleSort('grade','down')}} style={{cursor: "pointer"}}>&nbsp;↓&nbsp;</i>
        </span>
        <span>操作</span>
    </div>
);

Sort.propTypes = {
    onHandleSort: PropTypes.func.isRequired,
};

export default Sort;