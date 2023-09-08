import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeService {
    
    saveEmployee(employee: EmpolyeeRepository) {
        return axios.post(`${EMPLOYEE_API_BASE_URL}employee`, employee)
    }

    getEmployees(){
        return axios.get(`${EMPLOYEE_API_BASE_URL}employees`)
    }

    deleteEmployee(employeeId: string){
        return axios.delete(`${EMPLOYEE_API_BASE_URL}employee/${employeeId}`)
    }
}

export default new EmployeeService();