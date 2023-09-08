import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(null);

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
          <tbody className="bg-white">
            <tr>
              <td className="text-left py-3 px-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">Chamath</div>
              </td>
              <td className="text-left py-3 px-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">Induwara</div>
              </td>
              <td className="text-left py-3 px-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">chamath@gmail.com</div>
              </td>

              <td className="text-right py-3 px-3 whitespace-nowrap font-medium text-sm">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800  px-4"
                >
                  Edit
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 ">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
