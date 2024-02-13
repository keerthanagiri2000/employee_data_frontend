import React, {useState } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({ employee_name: '',email: '',role: '',team: '',dateOfJoining: '',address: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/employee/add', employeeData);
            toast.success(`${response.data.message}`)
            setEmployeeData({ employee_name: '',email: '',role: '',team: '',dateOfJoining: '',address: '' });
        } catch (error) {
            toast.error(`${error.message}`)
            console.log(error.message);
        }
    };

    const onhandleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen shadow-gray-500">
            <h1 className="mb-4 text-3xl font-bold">Create Employee</h1>
            <div className="w-full">
                <form className="flex flex-col items-center space-y-10" onSubmit={handleSubmit}>
                    <input type="text" name="employee_name" value={employeeData.employee_name} placeholder="Name" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" required onChange={onhandleChange}/>
                    <input type="text" name="email" value={employeeData.email} placeholder="Email" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" required onChange={onhandleChange}/>
                    <input type="text" name="role" value={employeeData.role}  placeholder="Role" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" onChange={onhandleChange}/>
                    <input type="text" name="team" value={employeeData.team}  placeholder="Team" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" onChange={onhandleChange}/>
                    <input type="text" name="dateOfJoining" value={employeeData.dateOfJoining} placeholder="Date of Joining" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" onChange={onhandleChange}/>
                    <input type="text" name="address"  value={employeeData.address} placeholder="Address" className="py-2 px-4 w-3/4 border-2 border-gray-200 rounded-md" onChange={onhandleChange}/>
                    <button type="submit" className="py-2 px-8 bg-blue-500 text-white rounded-md">Submit</button>
                    <Toaster />
                </form>
               
            </div>
        </div>
    );
};

export default EmployeeForm;
