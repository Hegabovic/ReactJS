import {Component} from 'react';
import "./inputField.css"

export default class InputField extends Component  {
    constructor() {
        super();
        this.state = {
            userName: "",
        }
    }

    render() {
        return (
            <div className={'field'}>
                <h3>Type Something &hearts; </h3>
                <div className={'pb-2'}>
                <input
                    onChange={(e) => {
                        this.setState({userName: e.target.value})
                    }}
                    type="text"/>
                </div>
                <div>
                    {this.state.userName}
                </div>
            </div>

        )
    }
}

