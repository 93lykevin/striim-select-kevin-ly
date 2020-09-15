import React from "react";

class SelectItem extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="select-item" onClick={() => this.props.handleSelect(this.props.option)}>
                {this.props.option}
            </div>
        );
    }
}

export default SelectItem;
