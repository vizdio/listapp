export function addListItem(listItem) {
  return {
      type: 'ADD_LIST_ITEM', listItem
  }
}

export function deleteListItem(id) {
    return {
        type: 'DELETE_LIST_ITEM', id
    }
}

export function selectListItem(id) {
  return {
      type: 'SELECT_LIST_ITEM', id
  }
}

export function sortByName(ascending) {
  return {
      type: 'SORT_BY_NAME', ascending
  }
}

export function sortByValue(ascending) {
  return {
      type: 'SORT_BY_VALUE', ascending
  }
}

export function sortByDate(ascending) {
  return {
      type: 'SORT_BY_DATE', ascending
  }
}