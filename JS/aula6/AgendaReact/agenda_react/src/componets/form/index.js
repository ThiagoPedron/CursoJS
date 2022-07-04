import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './form.css';

function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form action='#' className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text'
                value={novaTarefa} />

            <button type='submit'><FaPlus className='bt'/></button>
        </form>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
};

export default Form;
