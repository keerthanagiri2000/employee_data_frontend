import './App.css';
import EmployeeForm from './pages/employeeForm';
import ViewAllEmployee from './pages/viewallEmployee';


function App() {
  return (
    <div className="container mx-auto flex">
            <div className="w-1/2 p-4">
                <EmployeeForm />
            </div>
            <div className="w-1/2 p-4">
                <ViewAllEmployee />
            </div>
        </div>
  );
}

export default App;
 