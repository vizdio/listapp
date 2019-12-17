import React from 'react';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';
import { ReactComponent as Checked } from '../images/checked.svg';
import { ReactComponent as Unchecked } from '../images/unchecked.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

const DisplayList = ({ listItems, onListItemClick, onDeleteClick, onAddClick, onSortByName, onSortByValue, onSortByDate }) => {
    let name, value;

    return (
        <div>
            <header className="header">
                <h1>MY LIST APP</h1>
                <h2>React/Redux</h2>
            </header>

            <main>
                <ul className="list-container">
                    { (!listItems.length) ? 'Your list is empty' : listItems.map((item, index) =>
                        <li key={item.created} className={'row' + (item.selected ? ' selected' : '')} onClick={() => onListItemClick(index)}>
                            <div className="selected">
                                { item.selected ? <Checked /> : <Unchecked /> }
                            </div>
                            <div className="name">{item.name}</div>
                            <div className="value">
                                <CurrencyFormat
                                    value={item.value}
                                    displayType={'text'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    thousandSeparator={true}
                                    prefix={'$'} />
                            </div>
                            <Moment className="date" format="MMMM DD, YYYY h:mma">{item.created}</Moment>
                            <Moment className="date mobile" format="MM/DD/YYYY h:mma">{item.created}</Moment>
                            <div className="delete">
                                <Delete onClick={(e) => {e.stopPropagation(); onDeleteClick(index)}} />
                            </div>
                        </li>
                    )}
                </ul>
                <div className="sort-container">
                    <button className="sort-button" onClick={() => onSortByName()}>SORT BY NAME</button>
                    <button className="sort-button" onClick={() => onSortByValue()}>SORT BY VALUE</button>
                    <button className="sort-button" onClick={() => onSortByDate()}>SORT BY DATE</button>
                </div>
                <div className="add-container">
                    <div> Name: <input type="text" ref={(el) => { name = el }}/> </div>
                    <div> Value: <input type="text" ref={(el) => { value = el }}/> </div>
                    <button className="add-button" onClick={() => {onAddClick(name, value, {name: name.value, value: value.value, created: Date.now(), selected: false})}}>
                        ADD
                    </button>
                </div>
            </main>

            <footer>
                <p>By Jason Smith</p>
                <small>Created for FormStack Front-End Engineer Assignment</small>
            </footer>
        </div>
    );
}

export default DisplayList;
