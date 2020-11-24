import React,{ Component } from 'react';
import firebase, { databaseRef } from '../firebase';



// Intefaz del estado del Contexto, los Consumidores tendrán
// acceso este estado.
interface UsersProviderState {
    usersRef: firebase.firestore.CollectionReference;
    users: User[];
    create(user: User): void;
    read(id: string): User | undefined;
    update(id: string, data: Partial<User>): void;
    remove(id: string): void;
    
    
}
// Crea un nuevo contexto
export const UsersContext = React.createContext<UsersProviderState | null>(null);


// Creamos un Componente Proveedor
class UsersProvider extends Component<{}, UsersProviderState> {
    unsubscribe = ()=>{};
    constructor(props: any){
        super(props);
        this.create = this.create.bind(this);
        this.read   = this.read.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {
            usersRef: databaseRef.firestore().collection('/users'),
            users: [],
            create: this.create,
            read:   this.read,
            update: this.update,
            remove: this.remove            
        };
    }
    componentDidMount(){

        this.unsubscribe = this.state.usersRef.onSnapshot(snapshot =>{
            if(snapshot.empty){
                this.setState({
                    users: []
                });
            } else {
                const usrs = snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}}) as User[];
                this.setState({
                    users: usrs
                });
            }
        });
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    create(user: User) {
        this.state.usersRef.add(user);
    }
    read(id: string): User | undefined {
        return this.state.users.find( user => user.id === id);
    }
    update(id: string, data: Partial<User>) {
        this.state.usersRef.doc(id).set(data);
    }
    remove(id: string) {
        this.state.usersRef.doc(id).delete();
    }
    render(){

        return(
            <UsersContext.Provider value={this.state}>
                {this.props.children}
            </UsersContext.Provider>
        );
    }
    
}

export default UsersProvider;
