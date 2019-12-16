import listItems from './index';

describe('listItems Reducer', () => {
  const initialState = [
      {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
      {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
      {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
      {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
      {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
    ];

  it('returns the initial state when an action type is not passed', () => {
    const reducer = listItems(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('handles ADD_LIST_ITEM as expected', () => {
    const reducer = listItems([], {type: "ADD_LIST_ITEM", listItem: {name: 'New List Item', value: '100', created: 1572385350000, selected:false}});
    expect(reducer).toEqual(
        [{"created": 1572385350000, "name": "New List Item", "selected": false, "value": "100"}]
    );
  });

  it('handles DELETE_LIST_ITEM as expected', () => {
    const reducer = listItems(initialState, {type: "DELETE_LIST_ITEM", id: 0});
    expect(reducer).toEqual(
        [
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
        ]
    );
  });

  it('handles SELECT_LIST_ITEM as expected', () => {
    const reducer = listItems(initialState, {type: "SELECT_LIST_ITEM", id: 2});
    expect(reducer).toEqual(
        [
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1571383350000, "name": "Metroid", "selected": true, "value": "69"},
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
        ]
    );
  });

  it('handles SORT_BY_NAME as expected when ascending order is true', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_NAME", ascending: true});
    expect(reducer).toEqual(
        [
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"},
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
        ]
    );
  });

  it('handles SORT_BY_NAME as expected when ascending order is false', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_NAME", ascending: false});
    expect(reducer).toEqual(
        [
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
        ]
    );
  });

  it('handles SORT_BY_VALUE as expected when ascending order is true', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_VALUE", ascending: true});
    expect(reducer).toEqual(
        [
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"}
        ]
    );
  });

  it('handles SORT_BY_VALUE as expected when ascending order is false', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_VALUE", ascending: false});
    expect(reducer).toEqual(
        [
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
        ]
    );
  });

  it('handles SORT_BY_DATE as expected when ascending order is true', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_DATE", ascending: true});
    expect(reducer).toEqual(
        [
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"},
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"}
        ]
    );
  });

  it('handles SORT_BY_DATE as expected when ascending order is false', () => {
    const reducer = listItems(initialState, {type: "SORT_BY_DATE", ascending: false});
    expect(reducer).toEqual(
        [
            {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
            {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"},
            {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
            {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
            {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"}
        ]
    );
  });
});

