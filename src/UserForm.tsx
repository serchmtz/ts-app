import { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';

interface UserFormProps {
    onFinish(values: any): void;
}

class UserForm extends Component<UserFormProps> {
    private readonly layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    private readonly tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    onFinishFalied = (errorInfo: any) => {
        console.log(errorInfo);
    }
    render() {
        return (
            <Form
                {...this.layout}
                onFinishFailed={this.onFinishFalied}
                onFinish={this.props.onFinish}
            >
                <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[{ required: true, message: 'Inserta el nombre del usuario' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Correo"
                    name="correo"
                    rules={[{ required: true, message: 'Inserta el correo del usuario' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Semestre"
                    name="semestre"
                    rules={[{ required: true, message: 'Selecciona un semestre' }]}

                >
                    <Select>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Tipo de usuario"
                    name="tipo"
                    rules={[{ required: true, message: 'Selecciona un tipo de usuario' }]}
                >
                    <Select>
                        <Select.Option value="1">Admin</Select.Option>
                        <Select.Option value="2">Participante</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item {...this.tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Crear Usuario
                    </Button>
                </Form.Item>
            </Form>
        );

    }
}

export default UserForm;