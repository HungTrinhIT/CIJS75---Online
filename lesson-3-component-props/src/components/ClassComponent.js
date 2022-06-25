// OOP = Object Oriented Programing
import { Component } from 'react'

// side effect = Call API, animation, re-render 
// Lifecycle: constructor, componentDidMount

class ClassComponent extends Component {

    componentDidMount() {
        console.log("This is didMount")
    }

    render() {
        console.log("This is render")
        const a = 2;
        const b = 3;

        return (
            <div>
                <h1>This is class component</h1>
                {a} + {b} = {a + b}
            </div>
        )
    }
}
export default ClassComponent;