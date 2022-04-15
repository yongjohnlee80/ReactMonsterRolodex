// import { Component } from "react";

import "./search-box.styles.css";

/**
 * Functional Implmentation of SearchBox Component.
 * @param {*} props
 * @returns
 */
const SearchBox = (props) => {
    const { className, placeholder, onChangeHandler } = props;
    return (
        <input
            className={`search-box ${className}`}
            type={className}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};

/**
 * Class Implementation of SearchBox Component
 */
// class SearchBox extends Component {
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type={this.props.className}
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         );
//     }
// }

export default SearchBox;
