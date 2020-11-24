import { Component } from 'react';
import { Avatar, Card, Popconfirm, message } from 'antd';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { UsersContext } from './contexts/UsersContext';

interface UserCardProps {
    photo?: string;
    name: string;
    email: string;
    id: string;
}

const { Meta } = Card;
export class UserCard extends Component<UserCardProps> {
    render() {
        return (
            <UsersContext.Consumer>
                {
                    context => context &&
                        <Card>
                            <Meta
                                title={
                                    <>
                                    {this.props.name}
                                    <Popconfirm
                                        title="¿Seguro que quieres eliminar al usuario?"
                                        okText="Sí"
                                        cancelText="No"
                                        onConfirm={
                                            () => {
                                                context.remove(this.props.id);
                                                message.success("Usuario eliminado");
                                            }
                                        }
                                        onCancel={
                                            () => {
                                                message.error("Eliminación de usuario cancelada");
                                            }
                                        }
                                    >
                                        <DeleteOutlined style={{float: 'right'}}/>
                                    </Popconfirm>
                                    </>
                                }
                                description={this.props.email}
                                avatar={<Avatar icon={<UserOutlined />} src={this.props.photo} />}
                            />
                        </Card>
                }
            </UsersContext.Consumer>
        );
    }
}
