import {Component} from 'react';
import "./InputFormComponent.css"


export default class InputFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            userName: "",
            Age: "",
            sendStudent:this.props.sendStudent

        }
    }

    render() {
        return (
            <div className={'RegisterContainer'}>
                <div>
                    <h3 className={'text-center'}>Register a Student</h3>
                    <div className={'pb-2'}>
                        <input
                            onChange={(e) => {
                                this.setState({id: e.target.value})
                            }}
                            type="text"/>
                    </div>
                    <div className={'pb-2'}>
                        <input
                            onChange={(e) => {
                                this.setState({userName: e.target.value})
                            }}
                            type="text"/>
                    </div>
                    <div className={'pb-2'}>
                        <input
                            onChange={(e) => {
                                this.setState({Age: e.target.value})
                            }}
                            type="text"/>
                    </div>
                    <button
                        className={'btn btn-success'}
                        onClick={()=>{
                            this.state.sendStudent(this.state.id,this.state.userName,this.state.Age)
                        }}
                    >Add Student</button>
                </div>

                <div>
                    {this.state.userName}
                    {this.state.Age}
                </div>
            </div>

        )
    }
}

