import React, { Component } from "react";

    class TodoListStatefull extends Component{
        constructor(props){        
        super(props)
        this.state = {
            itens:[
                'Alface',
                'Tomate',
                'Melancia'
                ]
            }
        }



    //Funcion para adicionar itens a lista TodoListStateFull
    addItem = (addIt) => {
        this.setState({itens:[...this.state.itens, addIt]})
    }

    removeLastItem = () =>{
        this.setState({itens:[...this.state.itens.slice(1)] })
    }

    render() {
        const {itens} = this.state
        return(
            <div>
                <h1>Lista de compras</h1>
                <ul>
                    {itens.map(itens =><li>{itens}</li>) /* Isso daqui faz com que os itens sejam renderizado um por um graças ao map*/}
                </ul>
                <div>
                    <button onClick={() => this.addItem("Abobora")}>
                        Adicionar item 
                    </button>
                    <button onClick={() =>this.removeLastItem()}>
                        Remover ultimo item
                    </button>
                </div>   
            </div>
        )
    }
}
export default TodoListStatefull;
