import React, {Component} from 'react'


class Laps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laps: 0
        };
    };



render() {

    return(
        <div>
            <h2>Laps Around Track: {this.state.laps}</h2>
            <button onClick={() => this.setState({laps: this.state.laps + 1})}>Lap</button>
            <button onClick={() => this.setState({laps: 0})}>Reset Counter</button>
        </div>
    );
}
}

export default Laps; 