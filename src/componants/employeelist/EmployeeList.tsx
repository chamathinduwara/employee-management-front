import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState<EmpolyeeRepository[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  function deleteEmployee(e: FormEvent, id: string) {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then((respone) => {
        console.log(respone);
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateEmployee(e: FormEvent, employee: EmpolyeeRepository) {
    e.preventDefault();
  }
  return (
    <div className="container mx-auto my-6">
      <div className="h-12 ">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-green-700 text-white font-semibold px-6 py-2"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-3">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase py-3 px-3 tracking-wider">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase py-3 px-3 tracking-wider">
                EmailId
              </th>
              <th className="text-right font-medium text-gray-500 uppercase py-3 px-3 tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees?.map((employees) => (
                <tr key={employees.id}>
                  <td className="text-left py-3 px-3 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employees.firstName}
                    </div>
                  </td>
                  <td className="text-left py-3 px-3 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employees.lastName}
                    </div>
                  </td>
                  <td className="text-left py-3 px-3 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employees.emailId}
                    </div>
                  </td>

                  <td className="text-right py-3 px-3 whitespace-nowrap font-medium text-sm">
                    <button
                      onClick={(e) => updateEmployee(e, employees)}
                      className="text-indigo-600 hover:text-indigo-800  px-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => deleteEmployee(e, employees.id)}
                      className="text-indigo-600 hover:text-indigo-800 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
