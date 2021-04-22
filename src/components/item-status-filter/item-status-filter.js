import React, {Component} from "react";
import "./item-status-filter.css"

export default class ItemStatusFilter extends Component {



    render() {

        const {setFilter} = this.props;

        return(
            <div className="btn-group">
                <button type="button"
                        className="btn btn-info"
                        onClick={() => setFilter('all')}
                >All</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setFilter('active')}
                >
                    Active</button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setFilter('done')}
                >
                    Done</button>
            </div>
        );
    }

}
