import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './tarefas.css';

function Tarefas({ handleDelete, handleEdit,tarefas}) {
    return (
        <ul className='tarefas'>
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit className='edit' onClick={(e) => handleEdit(e, index)} />
                        <FaWindowClose className='delete' onClick={(e) => handleDelete(e, index)} />
                    </span>
                </li>
            ))}
        </ul>
    );
};
Tarefas.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas: PropTypes.array.isRequired
};
export default Tarefas;
