import React from "react";
import axios from "axios";
import Students from "./Students";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      students: null,
      filterStudents: null,
      search: null,
    };
  }

  handleGetFields = (e) => {
    const { search, students } = this.state;
    this.setState({ search: e.target.value });
    if (search === "") {
      this.setState({ filterStudents: students });
    } else {
      let filter = [];
      students.forEach((student) => {
        if (
          student.firstName.toLowerCase().includes(search) ||
          student.lastName.toLowerCase().includes(search)
        ) {
          filter.push(student);
        }
      });
      this.setState({ filterStudents: filter });
    }
  };

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) =>
        this.setState({
          students: response.data.students,
          filterStudents: response.data.students,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { students, search, filterStudents } = this.state;
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            onChange={this.handleGetFields}
          ></input>
        </div>
        {filterStudents !== null && (
          <Students search={search} filterStudents={filterStudents} />
        )}
      </div>
    );
  }
}

export default App;
