import initialState from '../defaults.json';

const listItems = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            return [...state, action.listItem];

        case 'DELETE_LIST_ITEM':
            return [...state.slice(0, action.id), ...state.slice(action.id + 1, state.length)]

        case 'SELECT_LIST_ITEM':
            return state.map((listItem, index) => {
                return {...listItem, selected: (action.id === index && !listItem.selected)}
            })

        case 'SORT_BY_NAME':
            return state.slice().sort(function(a, b) {
                let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase()
                if (nameA < nameB) return action.ascending ? -1 : 1;
                if (nameA > nameB) return action.ascending ? 1 : -1;
                return 0
            })

        case 'SORT_BY_VALUE':
            return state.slice().sort(function(a, b) {
                let valueA = a.value,
                valueB = b.value;
                return action.ascending ? valueA - valueB : valueB - valueA
            })

        case 'SORT_BY_DATE':
            return state.slice().sort(function(a, b) {
                let valueA = a.created,
                valueB = b.created;
                return action.ascending ? valueA - valueB : valueB - valueA
            })

        default:
            return state;
    }
};

export default listItems;