import './screenAdmin.css';
import { useSelector } from 'react-redux';

//order insert results

function ScreenAdmin(){

const customerList = useSelector((store) => store.customerList);

return (
    <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Time Order Placed</th>
        <th>Type</th>
        <th>Cost</th>
        </tr>
        </thead>
       <tbody>
           {customerList.map((customer, index) =>
        <tr key={index}>
        <td>{customer.customer_name}</td>
        <td>{customer.time}</td>
        <td>{customer.type}</td>
        <td>{customer.total}</td>
        </tr>
        )}
        </tbody>
    </table>
)
}
export default ScreenAdmin;