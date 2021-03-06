import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0},
        ]
    };

    handleDelete = (counterId) => {
        //console.debug('counterId', counterId);
        this.setState({counters:this.state.counters.filter(c=>c.id !== counterId)});
    };

    handleIncrement = (counter) => {
        const counters = this.state.counters.map(c=>{
            if(c.id===counter.id) c.value++;
            return c;
        })
        this.setState({counters});
    };

    handleReset = ()=>{
        const counters = this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({counters});
    };

    render() { 
        return (<div>
            <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm">Reset</button>
            {this.state.counters.map(counter=> (
                <Counter key={counter.id} counter={counter}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                >
                </Counter>
            ))}
        </div>);
    }
}
 
export default Counters;