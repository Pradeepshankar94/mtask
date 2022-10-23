import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import Menu from './Menu';

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

const listReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          list: state.list.concat({ name: action.name, id: action.id }),
        };
      default:
        throw new Error();
    }
  };
  
  const Task5 = () => {
    const [listData, dispatchListData] = React.useReducer(listReducer, {
      list: initialList,
      isShowList: true,
    });
    const [name, setName] = React.useState('');
  
    function handleChange(event) {
      setName(event.target.value);
    }
  
    function handleAdd() {
      dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
  
      setName('');
    }
  
    return (
      <div>
        <Menu />
        <AddItem
          name={name}
          onChange={handleChange}
          onAdd={handleAdd}
        />
  
        <List list={listData.list} />
      </div>
    );
  };
  
  const AddItem = ({ name, onChange, onAdd }) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
  
  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  
  export default Task5;