import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const  items = ['Go to a walk','Ride on a bike'];
    return(
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}

const AppHeader = () => {
    return(
        <h1>My Todo list</h1>
    );
}

const SearchPanel = () => {
    const searchText = 'Type here to search'
    const searchStile = {
        fontSize: '25px'
    }
    return (
        <input
            style={searchStile}
            placeholder={searchText} />
    );

}

const App = () => {
    const value = '<scrip>alert("")<script/>';
    return(
        <div>
            {value}
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </div>
    );
}


    ReactDOM.render(<App/>,
        document.getElementById('root'));

