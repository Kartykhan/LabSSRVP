// Lab6.jsx
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm"; // Импортируем компонент редактирования

const Lab6 = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/data");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:3002/data/${id}`);
      alert("Пользователь успешно удален!");
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }, []);

  const handleEdit = useCallback((user) => {
    setEditingUser(user);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setEditingUser(null);
  }, []);

  const handleSaveEdit = useCallback((updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  }, [users]);

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Удалить</button>
            <button onClick={() => handleEdit(user)}>Изменить</button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <EditUserForm
          user={editingUser}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default Lab6;
