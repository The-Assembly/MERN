import React, {Component} from 'react';
import axios from 'axios';

class UserList extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.getUsers();       
    }

    getUsers = () => {
        axios
            .get('/users')
            .then((res) => {
                if (res.data) {
                    this.setState({users: res.data});
                }
            })
            .catch((err) => console.log(err));
    };

    render() {
        let {users} = this.state;

        return (<div>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => {
                        return (
                            <li>Name:{user.name}, Age:{user.age}, Email: {user.email} </li>
                        );
                    })}
                </ul>
            </div>);
    }
}

export default UserList;