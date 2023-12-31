import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./componants/addEmployee/AddEmployee";
import Nav from "./componants/navbar/Nav";
import EmployeeList from "./componants/employeelist/EmployeeList";
import UpdateEmployee from "./componants/updateEmployee/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<EmployeeList></EmployeeList>}></Route>
          <Route index element={<EmployeeList></EmployeeList>}></Route>
          <Route
            path="/employeeList"
            element={<EmployeeList></EmployeeList>}
          ></Route>
          <Route
            path="/addEmployee"
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route
            path="/updateEmployee/:id"
            element={<UpdateEmployee></UpdateEmployee>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
