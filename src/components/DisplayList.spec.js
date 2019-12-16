import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DisplayList from './DisplayList'

const initialState = [
  {"created": 1572381350000, "name": "Super Mario Bros", "selected": false, "value": "85"},
  {"created": 1575382350000, "name": "Legend of Zelda, The", "selected": false, "value": "103"},
  {"created": 1571383350000, "name": "Metroid", "selected": false, "value": "69"},
  {"created": 1570384350000, "name": "Techmo Bowl", "selected": false, "value": "22"},
  {"created": 1572385350000, "name": "Final Fantasy", "selected": false, "value": "77"}
];

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    listItems: initialState,
    onListItemClick: jest.fn(),
    onDeleteClick: jest.fn(),
    onAddClick: jest.fn(),
    onSortByName: jest.fn(),
    onSortByValue: jest.fn(),
    onSortByDate: jest.fn()
  }

  const enzymeWrapper = shallow(<DisplayList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('DisplayList', () => {
    const { enzymeWrapper } = setup();
    it('should render header properly', () => {
      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
      expect(enzymeWrapper.find('h1').text()).toBe('MY LIST APP');
      expect(enzymeWrapper.find('h2').text()).toBe('React/Redux');
    });

    it('should render list propery', () => {
      expect(enzymeWrapper.find('ul').hasClass('list-container')).toBe(true);
      expect(enzymeWrapper.find('li')).toHaveLength(5);
      expect(enzymeWrapper.find('li').at(0).html()).toBe('<li class=\"row\"><div class=\"selected\"><svg>unchecked.svg</svg></div><div class=\"name\">Super Mario Bros</div><div class=\"value\"><span>$85.00</span></div><time dateTime=\"1572381350000\" class=\"date\">October 29, 2019 4:35pm</time><div class=\"delete\"><svg>delete.svg</svg></div></li>');
      expect(enzymeWrapper.find('li').at(1).html()).toBe('<li class=\"row\"><div class=\"selected\"><svg>unchecked.svg</svg></div><div class=\"name\">Legend of Zelda, The</div><div class=\"value\"><span>$103.00</span></div><time dateTime=\"1575382350000\" class=\"date\">December 03, 2019 9:12am</time><div class=\"delete\"><svg>delete.svg</svg></div></li>');
      expect(enzymeWrapper.find('li').at(2).html()).toBe('<li class=\"row\"><div class=\"selected\"><svg>unchecked.svg</svg></div><div class=\"name\">Metroid</div><div class=\"value\"><span>$69.00</span></div><time dateTime=\"1571383350000\" class=\"date\">October 18, 2019 3:22am</time><div class=\"delete\"><svg>delete.svg</svg></div></li>');
      expect(enzymeWrapper.find('li').at(3).html()).toBe('<li class=\"row\"><div class=\"selected\"><svg>unchecked.svg</svg></div><div class=\"name\">Techmo Bowl</div><div class=\"value\"><span>$22.00</span></div><time dateTime=\"1570384350000\" class=\"date\">October 06, 2019 1:52pm</time><div class=\"delete\"><svg>delete.svg</svg></div></li>');
      expect(enzymeWrapper.find('li').at(4).html()).toBe('<li class=\"row\"><div class=\"selected\"><svg>unchecked.svg</svg></div><div class=\"name\">Final Fantasy</div><div class=\"value\"><span>$77.00</span></div><time dateTime=\"1572385350000\" class=\"date\">October 29, 2019 5:42pm</time><div class=\"delete\"><svg>delete.svg</svg></div></li>');
    });

    it('should render sort buttons properly', () => {
      expect(enzymeWrapper.find('div.sort-container')).toHaveLength(1);
      expect(enzymeWrapper.find('button.sort-button')).toHaveLength(3);
      expect(enzymeWrapper.find('button.sort-button').at(0).text()).toBe('SORT BY NAME');
      expect(enzymeWrapper.find('button.sort-button').at(1).text()).toBe('SORT BY VALUE');
      expect(enzymeWrapper.find('button.sort-button').at(2).text()).toBe('SORT BY DATE');
    });

    it('should render add new list item section properly', () => {
      expect(enzymeWrapper.find('input')).toHaveLength(2);
      expect(enzymeWrapper.find('button.add-button')).toHaveLength(1);
      expect(enzymeWrapper.find('button.add-button').text()).toBe('ADD');
    });
  })
})