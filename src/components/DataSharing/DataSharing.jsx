import React from 'react';
import CompA from './CompA.jsx';
import CompB from './CompB.jsx';

class DataSharing extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
        }
        this.transferData = this.transferData.bind(this);
    }
    
    transferData(value){
        this.setState({data: value});
    }

    render() {
        return(
            <>
            <CompA transferDataCallback = {this.transferData}></CompA>
            <CompB value={this.state.data}></CompB>
            </>
        )
    };
}
export default DataSharing;