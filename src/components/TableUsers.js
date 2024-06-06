import axios from 'axios';
import { useEffect,useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';

import { fetchUser } from '../services/UserServices';
const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() =>{
        //dry 

        getUsers();
    },[])

    const getUsers = async() =>{
        let res = await fetchUser();
        if(res && res.data && res.data.data){
            setListUsers(res.data.data);
        }
       
    }
    console.log(listUsers);
    return (
        <>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
            {
                listUsers && listUsers.length >0 && listUsers.map((user,index) =>{
                    return (
                        <tr key = {`users-${index}`}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                    </tr>
                    )
                })
            }
          
          
        </tbody>
      </Table>
        </>

    );
}
export default TableUsers;