

const Employee = (employees : EmpolyeeRepository | any, deleteEmployee : any) => {
  return (
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
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800  px-4"
                    >
                      Edit
                    </a>
                    <button
                      onClick={(e) => deleteEmployee(e, employees.id)}
                      className="text-indigo-600 hover:text-indigo-800 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
  )
}

export default Employee