import { connect } from 'react-redux';
import { sort } from '../actions';
import Sort   from '../components/Sort';

const mapStateToProps = (state)=>{
    return state;
};

const mapDispatchToProps = (dispatch)=>{
    return{
        onHandleSort: (item,order)=>{dispatch(sort({
            item,
            order
        }))}
    }
};

const SortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sort);

export default SortContainer;