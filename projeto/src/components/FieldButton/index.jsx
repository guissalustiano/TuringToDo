import React from 'react'
import './style.css'

export default class FieldButton extends React.Component {
    render = () => (<div onClick={this.props.onClick} className="field-button">
        {this.props.children}
    </div>)
}