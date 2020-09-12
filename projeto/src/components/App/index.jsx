import React from 'react'
import './style.css'

import Title from '../Title'
import TodoTile from '../TodoTile'
import FieldText from '../FieldText'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contents: [] }
    }

    handleSubmit = (value) => {
        return this.setState({ contents: [value, ...this.state.contents] })
    }

    render = () => (
        <div className="app">
            <Title />
            <FieldText onSubmit={this.handleSubmit} />
            {
                this.state.contents.map((content) => <TodoTile key={content} content={content} />)
            }
        </div>
    )
}