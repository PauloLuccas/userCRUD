import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    loadTasks()
  }, []);

  async function loadTasks() {
    const response = await api.get('/tasks');
    console.log(response);
    setTasks(response.data);
  }

  return (
    <div className="container">
      <br/>
      <h1>Tasks page</h1>
      <br/>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Data de Nascimento</th>
              <th>Tipo de Usuário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
              {
                tasks.map(task => (
                  <tr key={ task.id }>
                    <td>{ task.id }</td>
                    <td>{ task.title }</td>
                    <td>{ task.description }</td>
                    <td>{ task.created_at }</td>
                    <td>{ task.finished }</td>
                    <td>
                      <Button size="sm">Editar</Button>{' '}
                      <Button size="sm" variant="danger">Remover</Button>{' '}
                    </td>
                  </tr>
                ))

              }
          </tbody>
        </Table>
    </div>
  );
}

export default Tasks;