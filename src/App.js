// import { Component } from "react"; // class approach
import { useState, useEffect } from "react"; // funcational approach

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";


/**
 * Functional Approach Application.
 * @returns 
 */
const App = () => {
    const [searchField, setSearchField] = useState(""); // [value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster)=> {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">My FirstReactApp: Monsters Rolodex</h1>
            <SearchBox
                className="search-box"
                placeholder="find me"
                onChangeHandler={onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

/**
 * Class Approach Application.
 */
// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             monsters: [],
//             searchField: "",
//         };
//     }

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((users) =>
//                 this.setState(() => {
//                     return { monsters: users };
//                 })
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };

//     render() {
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });

//         return (
//             <div className="App">
//                 <h1 className="app-title">
//                     My FirstReactApp: Monsters Rolodex
//                 </h1>
//                 <SearchBox
//                     className="search-box"
//                     placeholder="find me"
//                     onChangeHandler={onSearchChange}
//                 />
//                 <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;
