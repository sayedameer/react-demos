import "./styles.css";
import { useCallback, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [users, setUsers] = React.useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" }
  ]);

  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
  // callback function
  const callback = (user, id) => {
    return user.id !== id;
  };
  const handleRemove = (id) => {
    // using callback function to filter.
    setUsers(users.filter((user) => callback(user, id)));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

const List = ({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, onRemove }) => {
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default App;
