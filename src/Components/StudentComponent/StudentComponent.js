import './StudentCOmponent.css'
import {NavLink} from "react-router-dom";

let StudentComponent = ({students}) => {
    console.log(students)
    let renderStudent = () => {
        if (students.length > 0) {
            return students.map((student, index) => {
                localStorage.setItem("id",student.id)
                localStorage.setItem("name",student.name)
                localStorage.setItem("age",student.age)
                return (

                    <tr key={index}>
                            <td><NavLink to={'/studentData/'+student.id}>{student.id}</NavLink></td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                    </tr>


                )
            })
        }
    }
    return (
        <div>
            <table className={'table table-hover table-striped text-center'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {renderStudent()}


                </tbody>
            </table>
        </div>
    )
}

export default StudentComponent;
