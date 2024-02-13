import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ViewAllEmployee = () => {
    const [employeeData, setEmployeeData] = useState([]);
    useEffect(() => {
        const fetchAllEmployee = async() => {
            try{
                const response = await axios.get('http://localhost:3000/api/employee/list_all')
                setEmployeeData(response.data.data)
            } catch (error){
                console.log(error.message);
            }
        };
        fetchAllEmployee();
    },[]);

    const handleDelete = async (id) => {
        try {
           const response = await axios.delete(`http://localhost:3000/api/employee/delete/${id}`)
           setEmployeeData(employeeData.filter(employee => employee._id !== id))
           toast.success(`${response.data.message}`)
        } catch(error) {
            toast.error(`${error.message}`)
            console.log(error.message);
        }

    };    
    return (
        <div className="my-14 bg-white rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">All Employees</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Joined</th>
                        <th>Role</th>
                        <th>Team</th>
                        <th>Date of Joining</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee) => (
                    <tr key={employee._id}>
                        <td>{employee.employee_name}</td>
                        <td>{employee.dateOfJoining}</td>
                        <td>{employee.role}</td>
                        <td>{employee.team}</td>
                        <td>{employee.email}</td>
                        <td className='flex space-between'>
                            <button><img src="edit-3-svgrepo-com.svg" alt="editsvg" className='mx-1 w-6 h-6'/></button>
                            <button onClick={() => handleDelete(employee._id)}><img src="bin-essential-trash-svgrepo-com.svg" alt="deletesvg" className='mx-1 w-6 h-6'/></button>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAllEmployee;



