import { Component } from "react";


class ClassBasedComponent extends Component {

    // state = {
    //     showText: false
    // };

    constructor(props) {
        super(props);

        this.state = {
            showText: false,
            count: 0,
            disable: false
        }

        // function inside constructor
        this.handleClick = () => {
            
            this.setState({
                showText: !this.state.showText
            });
        }
    }

    // function outside constructor
    handleCount = () => {
        this.setState({
            ...this.state,
            count: !this.state.disable && this.state.count +1 || this.state.count
        });
    }

    handleReset = () => {
        this.setState({
            ...this.state,
            disable: false,
            count: this.state.count > 0 && 0,
        });
    }

    componentDidMount() {
        // alert('componentDidMount called');
        console.log('componentDidMount called');
    }

    componentDidUpdate(prevPops, prevState) {
        console.log('this.state', this.state);
        if (prevState && prevState.count != this.state.count && this.state.count >= 10) {
            this.setState({
                ...this.state,
                disable: true
            });
        }
    }

    componentWillUnmount() {
        console.log("Component get unmounted");
    }

    render() {
        const {showText, count, disable} = this.state;
        return (<>
        
                <div>
                    <h3>Class Based Components</h3>
                    <p style={showText ? {color:"green"} :{color:"red"}}>Text: {showText ? "True" : "False"}</p>
                    <button onClick={this.handleClick}>Toggle Text</button>
                    <p>Count: {count}</p>
                    <button style={disable && {color:'grey'} || {color:'black'}} onClick={this.handleCount}>Increase</button>
                    <button style={count == 0 && {color:'grey'} || {color:'black'}}onClick={this.handleReset}>Reset</button>
                    
                </div>
        </>)
    }
}

export default ClassBasedComponent;