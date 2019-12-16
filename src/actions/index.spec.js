import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a list item', () => {
    const listItem = {name: 'New List Item', value: '100', created: 1572381350000, selected: false}
    const expectedAction = {
      type: 'ADD_LIST_ITEM',
      listItem
    }
    expect(actions.addListItem(listItem)).toEqual(expectedAction)
  })

  it('should create an action to delete a list item', () => {
    const id = 1
    const expectedAction = {
      type: 'DELETE_LIST_ITEM',
      id
    }
    expect(actions.deleteListItem(id)).toEqual(expectedAction)
  })

  it('should create an action to select a list item', () => {
    const id = 1
    const expectedAction = {
      type: 'SELECT_LIST_ITEM',
      id
    }
    expect(actions.selectListItem(id)).toEqual(expectedAction)
  })

  it('should create an action to sort list by name', () => {
    const expectedAction = {
      type: 'SORT_BY_NAME'
    }
    expect(actions.sortByName()).toEqual(expectedAction)
  })

  it('should create an action to sort list by value', () => {
    const expectedAction = {
      type: 'SORT_BY_VALUE'
    }
    expect(actions.sortByValue()).toEqual(expectedAction)
  })

  it('should create an action to sort list by date', () => {
    const expectedAction = {
      type: 'SORT_BY_DATE'
    }
    expect(actions.sortByDate()).toEqual(expectedAction)
  })
})