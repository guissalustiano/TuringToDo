import React from 'react'
import './style.css'

import FieldButton from '../FieldButton'

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({ value: '' })
    }


    handleChange = (event) =>
        this.setState({ value: event.target.value })


    render() {
        return (
            <form className="text-field">
                <input placeholder="Nova tarefa"
                    onChange={this.handleChange}
                    value={this.value} />
                <FieldButton onClick={this.handleSubmit}>Adicionar</FieldButton>
            </form>
        )
    }
}