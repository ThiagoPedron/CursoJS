import React, { Component } from 'react'; // Importando componente
import './main.css';
import Form from './form';
import Tarefas from './tarefas';

class Main extends Component {
    state = { // Criando o state 
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    handleChange = (e) => { // Função que recebe o que esta sendo escrito
        this.setState({ // Setando o state
            novaTarefa: e.target.value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;
        if(novaTarefa == "" ) return;

        if (index === -1) {
            this.setState({
                tarefas: [...tarefas, novaTarefa],
                novaTarefa: ''
            });
        } else {
            tarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...tarefas],
                index: -1,
                novaTarefa: ''
            })
        };
    };



    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }
    handleEdit = (e, index) => {
        const { tarefas } = this.state;
        this.setState({
            index, // colocamos o index como o index que pegamos do item
            novaTarefa: tarefas[index],
        });
    };


    // componentDidUpdate(prevProps, prevState) {//local storage
    //     console.log(this.state.novaTarefa);
    // };
    componentDidUpdate(prevProps, prevState) // Passamos para a função tanto  as proprieadas anteriores quanto o estado anterior

    {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    };
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas });
    };

    render() {
        const { novaTarefa } = this.state; // Criando a constante
        const { tarefas } = this.state;
        return (
            <div className='main'>
                <h1>Lista de tarefas</h1>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />
                <Tarefas
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    tarefas={tarefas}
                />
            </div>

        );
    };

};

export default Main;

