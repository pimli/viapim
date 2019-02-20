import React, { Component } from 'react';
import URLLoader from './components/URLLoader';
import ThumbNails from './components/thumbNail/ThumbNails'
import Header from './components/Header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this.onData = this.onData.bind(this);
    }

    componentDidMount() {
        let list = URLLoader('/pc-se/serier/samtliga', this.onData);
    }

    onData(list) {
        this.setState({ data: list });
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.data && this.state.data.series.all && <ThumbNails series={this.state.data.series} />}
                {/* <div id="page-footer"></div> */}
            </div>
        );
    }
}

export default App;
