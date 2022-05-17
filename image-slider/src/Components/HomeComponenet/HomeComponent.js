import InputFormComponent from "../InputFormComponent/InputFormComponent";
import StudentComponent from "../StudentComponent/StudentComponent";
import {Component} from "react";

export default class Home extends Component{
    constructor() {
        super();
        this.state = {
            students:[],
        }
    }

    sendStudent = (id,name,age)=>{
      this.setState({
          students: [...this.state.students, {id,name,age}],
      })
    }
    render(){
        return(
            <div>
                <InputFormComponent sendStudent={this.sendStudent}/>
                <StudentComponent students = {this.state.students}/>
            </div>
        )
    }






}







