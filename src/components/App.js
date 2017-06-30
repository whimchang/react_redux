import React from 'react'
import SearchContainer from '../containers/Search'
import SortContainer from '../containers/SortContainer'
import PaginationContainer from '../containers/PaginationContainer'
// import AddTodo from '../containers/AddTodo'
import VisibleStudentList from '../containers/VisibleStudentList'

const App = () => (
    <div>
        {/*<AddTodo />
        <VisibleTodoList />
        <Footer />*/}
        <SearchContainer />
        <SortContainer />
        <VisibleStudentList />
        <PaginationContainer />
    </div>
);

export default App
