import { Component } from "react";
import { UserCard } from "./UserCard";
import { wihtUserData } from "./hocs/withuserdata";
interface UserListProps {
    users: User[];
}
export class UserList extends Component<UserListProps> {
    render(){
        const users = this.props.users ? this.props.users : new Array<User>();    
        return (
            <>
                {
                    users.map((user, i) =>{
                        return <UserCard name={user.nombre} email={user.correo} key={i} />
                    })
                }
            </>
        );
    }
}

export const UserListWithData = wihtUserData(UserList);
