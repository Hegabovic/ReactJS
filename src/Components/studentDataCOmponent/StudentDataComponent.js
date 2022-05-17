let StudentDataComponent = ()=>{

    return(
        <div>
            Student  ID  : {localStorage.getItem("id")}
            <br/>
            Student Name : {localStorage.getItem("name")}
            <br/>
            Student Age  : {localStorage.getItem("age")}
            <br/>
        </div>
    )
}




export default StudentDataComponent;