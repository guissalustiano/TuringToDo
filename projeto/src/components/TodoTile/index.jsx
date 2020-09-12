import React from 'react'

import Button from '../TodoButton'

import './style.css'

export default class TodoTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: false }
    }
    render = () => (
        <div className={`todo-tile ${this.state.status ? 'todo-tile-selected' : ''}`}>
            <h3>{this.props.content}</h3>
            <Button
                value={this.state.status}
                onChanged={(newValue) => this.setState({ status: newValue })}
            />
        </div>
    )
}