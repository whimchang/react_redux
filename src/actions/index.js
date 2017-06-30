export const deleteStudent = (id)=>{
    return {
        type: "DELETE_STUDENT",
        id
    }
};

export const setVisibilityFilter = (filter)=>{
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
};

export const setPagination = (pagination)=>{
    return {
        type: "PAGINATE",
        pagination
    }
};

export const sort = (sort)=>{
    return {
        type: "SORT",
        sort
    }
};
