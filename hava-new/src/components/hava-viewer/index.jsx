import React, {useState, useEffect} from 'react';
import {Button} from "shards-react";

class HavaViewer extends React.Component {
    componentDidMount() {
        window.hava_app();
    }

    $ = window.jQuery;
    handleZoom = () => {

        this.$("#paper .paper-controls button").eq(0).trigger('click');
    }

    showConnections = () => {
        this.$("input[ng-model='show_connections']").trigger('click');
    }

    render() {
        return (
            <>
                <Button theme="primary" onClick={this.handleZoom}>+</Button>
                <Button theme="primary" onClick={this.showConnections}>Show Connections</Button>
              
                <div id="viewer-isolation">
                    <div className="designer" model="design"
                         show-attributes="false" fit-to-content="true" default-layer="Layers::Original"
                         designer="designer">
                    </div>
                </div>

            </>
        )
    }

}


export default HavaViewer;
