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

    getEmployeeById(id : string) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}employee/${id}`);
    }
    
    updateEmploye(id: string, employee: EmpolyeeRepository){
        return axios.put(`${EMPLOYEE_API_BASE_URL}employee/${id}`,employee);
    }
}

export default new EmployeeService();