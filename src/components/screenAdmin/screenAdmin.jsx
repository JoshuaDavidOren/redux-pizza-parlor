import './screenAdmin.css';
import { useSelector } from 'react-redux';
$
//order insert results
const customerList = useSelector(store => store.customerList)

return (
    <table>
        <th>Name</th>
        <th>Time Order Placed</th>
        <th>Type</th>
        <th>Cost</th>
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