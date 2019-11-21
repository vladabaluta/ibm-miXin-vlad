import React, {Component} from 'react'
import ButtonComponent from '../button/buttonComponent';
import HeaderComponent from '../header/headerComponent';


export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showHeader:false
        }
    }
    toggleHeader = () => {
        this.setState({showHeader: !this.state.showHeader});
    };

       
    render (){
        
            return(
                <>
                 <ButtonComponent methodToRun={this.toggleHeader} name={this.state.showHeader ? "Hide" : "Show"}></ButtonComponent>
                 {this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent>: null}
                </>
                );
        }
}

