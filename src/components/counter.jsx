import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        value: this.props.counter.value,
    };

    // constructor(props){
    //     super(props);
    //     console.debug('counter', this);
    // }

    // handleIncrement = (product) => {
    //     this.setState({ value: this.state.value+1 });
    //     //this.state.count++;
    // }

    render() { 
        return (
            <div className='d-flex mb-1'>
                <h4>{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button 
                    onClick={()=> this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'
                    >
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm ms-2'>
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        const {value} = this.props.counter;
        let classes = "badge m-2 ";
        classes += value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? <span>Zero</span> : value;
    }
}
 
export default Counter;