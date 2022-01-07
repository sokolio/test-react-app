import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count: 0,
        tags: ['tag1','tag2']
    };
    render() { 
        return (
            <div class='d-flex flex-column'>
                <div class='d-flex'>
                    <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                    <button className='btn btn-secondary btn-sm'>Increment</button>
                </div>
                <div>
                    <ul>
                        { this.state.tags.map(tag=>(
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        const {count} = this.state;
        let classes = "badge m-2 ";
        classes += count === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;