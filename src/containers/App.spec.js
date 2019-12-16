import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MyConnectedComponent from './App';

const initialState = [
    {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
    {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
    {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
    {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
    {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
  ];

  const mockStore = configureStore([]);
  
  describe('My Connected React-Redux Component', () => {
    let store;
    let component;
    beforeEach(() => {
      store = mockStore(initialState);
      component = renderer.create(
        <Provider store={store}>
          <MyConnectedComponent />
        </Provider>
      );
    });
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
  });