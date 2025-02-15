import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import CustomerForm from './CustomerForm';

const CreateCustomer = () => {
  const { addCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = (newCustomer) => { 
    addCustomer(newCustomer);
    navigate('/'); // navigate to customer list after creation
  };

  return (
    <div>
      <h2>Create New Customer</h2>
      <CustomerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCustomer;
