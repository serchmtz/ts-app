import React from 'react';
import { databaseRef } from '../firebase';
import { Button } from 'antd';
interface UserDataProps {
    users: User[];
}

export function wihtUserData
(WComponent: React.ComponentType<UserDataProps>){
    return class WithUserData extends React.Component{
        private usersRef = databaseRef.firestore().collection('/users');
        private unsubscribe = () => {};
        state = {users: [] as User[]};

        componentDidMount(){
            this.unsubscribe = this.usersRef.onSnapshot(snapshot =>{
                if(snapshot.empty){
                    this.setState({
                        users: []
                    });
                } else {
                    const usrs = snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}}) as User[];
                    console.log(usrs);
                    this.setState({
                        users: usrs
                    });
                    console.log(this.state);
                }
            });
        }
        componentWillUnmount(){
            this.unsubscribe();
        }
        addUser = () =>{
            this.usersRef.add({
                nombre: 'Juan P T',
                correo: 'foo@gmail.com',
                semestre: 5,
                tipo: 2
            });
        }
        render(){
            
            return (
                <>
                    <Button onClick={this.addUser}>Add User</Button>
                    <WComponent users={this.state.users} />
                </>
            );
        }
    }
}


