import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Filter   from '../components/Search';

const mapStateToProps = (state)=>{
    return {
        search: state.searchFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onSubmitFilter: (filter)=>{dispatch(setVisibilityFilter(filter))}
    }
};

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default SearchContainer;
