import React from "react";
import SelectItem from "./SelectItem.jsx";
import "./style.css";

class Select extends React.Component {
    constructor() {
        super();
        this.state = { visible: false, value: "", options: [] };
        this.ref = React.createRef();

        this.handleSelect = this.handleSelect.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleSelect(e) {
        this.setState({ value: e });
        this.handleBlur();
    }

    handleChange(e) {
        let newOptions = this.props.options.filter((option) => option.toLowerCase().includes(e.target.value));
        this.setState({ value: e.target.value, options: newOptions });
    }

    handleFocus() {
        this.setState({ visible: true });
    }

    handleBlur() {
        this.setState({ visible: false });
    }

    handleClickOutside(e) {
        if (this.ref && !this.ref.current.contains(e.target)) {
            this.handleBlur();
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        this.setState({ options: this.props.options });
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <div className="select-container" ref={this.ref}>
                <div className="select-input-container">
                    <input
                        className="select-input"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        value={this.state.value}
                    />
                    <div className="clear-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <div className=""></div>
                </div>
                {this.state.visible && (
                    <div className="select-item-container">
                        {this.state.options.map((option) =>
                            typeof option === "string" ? (
                                <SelectItem option={option} handleSelect={this.handleSelect} />
                            ) : (
                                <SelectItem option={option.label} handleSelect={this.handleSelect} />
                            )
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Select;
