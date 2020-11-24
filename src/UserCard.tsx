import { Component } from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface UserCardProps {
    photo?: string;
    name: string;
    email: string;
    actions?: React.ComponentType[];
}

const { Meta } = Card;
export class UserCard extends Component<UserCardProps> {
    render(){
        return(
            <Card
                actions={this.props.actions}
            >
                <Meta
                    title={this.props.name}
                    description={this.props.email}
                    avatar={ <Avatar icon={ <UserOutlined /> } src={this.props.photo} /> }
                />
            </Card>
        );
    }
}
