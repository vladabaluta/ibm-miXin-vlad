import React, {Component} from 'react'
import './headerComponent.css'

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render () {       
        return (
            <header className="flex">
                <h1 className = "flex">{this.props.title}</h1>
            </header>
        )
    }
}