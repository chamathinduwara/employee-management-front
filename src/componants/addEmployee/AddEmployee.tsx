import { ChangeEvent, FormEvent, useState } from 'react'
import './AddEmployee.css'
import EmployeeService from '../../services/EmployeeService';

const AddEmployee = () => {
    const [ employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    })
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        
        setEmployee({
            ...employee,
            [name] : value
        })
        
    }

    const saveEmployee = (e: FormEvent) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((respone) => {
            console.log(respone)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const clearEmployee = (e: FormEvent) => {
        e.preventDefault();
    }

  return (
    <div className="flex max-w-2xl shadow-lg border-b mx-auto">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>ADD NEW EMPLOYEE</h1>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label 
                className='block text-gray-800 text-sm font-normal' 
                htmlFor='firstName'>
                    First Name
                </label>
                <input 
                    type='text' 
                    id='firstName' 
                    name='firstName' 
                    placeholder='First Name' 
                    className='border h-10 w-96 mt-2 px-2 py-2'
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label className='block text-gray-800 text-sm font-normal' htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' placeholder='Last Name' className='border h-10 w-96 mt-2 px-2 py-2'
                value={employee.lastName}
                onChange={handleChange}/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10'>
                <label className='block text-gray-800 text-sm font-normal' htmlFor='emailID'>Email</label>
                <input type='email' id='emailId' name='emailId' placeholder='Email' className='border h-10 w-96 mt-2 px-2 py-2'
                value={employee.emailId}
                onChange={(e) => handleChange(e)}/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 mb-10 space-x-5'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-6 py-2'>
                    Save
                </button>
                <button onClick={clearEmployee} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-6 py-2'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee