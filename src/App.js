import Header from "./Components/headerComponent/HeaderComponent";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/HomeComponenet/HomeComponent";
import ErrorComponent from "./Components/ErrorComponent/ErrorComponenet";
import Lab1 from "./Components/lab1/lab1";
import AboutComponent from "./Components/AboutComponent/aboutComponent";
import StudentDataComponent from "./Components/studentDataCOmponent/StudentDataComponent";
let App = () => {
    return (
                 <BrowserRouter>
                     <Header/>
                     <Routes>
                     <Route path="/home" element={<Home/>}/>
                     <Route path={"/studentData/:id"} element={<StudentDataComponent/>}/>
                     <Route path="/lab1" element={<Lab1/>}/>
                     <Route path={"/about"} element={<AboutComponent/>}/>
                     <Route path="*" element={<ErrorComponent/>}/>
                     </Routes>
        </BrowserRouter>


    )
}


export default App;
