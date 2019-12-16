import { connect } from 'react-redux';
import { selectListItem, deleteListItem, addListItem, sortByName, sortByValue, sortByDate } from '../actions';
import DisplayList from '../components/DisplayList';

let sortNameAscending = false;
let sortValueAscending = false;
let sortDateAscending = false;

const mapStateToProps = (state) => {
    return {
        listItems: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onListItemClick: (id) => dispatch(selectListItem(id)),
        onDeleteClick: (id) => dispatch(deleteListItem(id)),
        onAddClick: (name, value, listItem) => {
            if(name.value !== '' && value.value !== ''){
                name.value = '';
                value.value = '';
                dispatch(addListItem(listItem))
            }
        },
        onSortByName: () => {
            sortNameAscending = !sortNameAscending;
            dispatch(sortByName(sortNameAscending))
        },
        onSortByValue: () => {
            sortValueAscending = !sortValueAscending; 
            dispatch(sortByValue(sortValueAscending))
        },
        onSortByDate: () => {
            sortDateAscending = !sortDateAscending; 
            dispatch(sortByDate(sortDateAscending))
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(DisplayList);

