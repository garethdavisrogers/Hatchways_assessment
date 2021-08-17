import React from "react";
import axios from "axios";
import Students from "./Students";
import { ToastContainer, toast } from "react-toastify";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      students: null,
      filterStudents: null,
      searchByName: null,
      searchByTag: null,
    };

    this.handleGetFields = this.handleGetFields.bind(this);
  }

  handleGetFields(e) {
    const { searchByName, searchByTag, students } = this.state;
    if (searchByName && searchByName.length === 0) {
      this.setState({ searchByName: null });
    }
    if (searchByTag && searchByTag.length === 0) {
      this.setState({ searchByTag: null });
    }
    const filter = [];
    if (
      searchByName === null &&
      searchByTag === null &&
      e.target.value.length === 0
    ) {
      this.setState({ filterStudents: students });
    }
    if (e.target.name === "search-by-name" && e.target.value.length > 0) {
      this.setState({ searchByName: e.target.value });
      students.forEach((student) => {
        let caseIns = new RegExp(e.target.value, "i");
        if (caseIns.test(student.firstName) || caseIns.test(student.lastName)) {
          filter.push(student);
        }
      });
      this.setState({ filterStudents: filter });
      if (filter.length === 0) {
        toast("We did not find anyone matching your search");
      }
    } else if (e.target.name === "search-by-tag" && e.target.value.length > 0) {
      this.setState({ searchByTag: e.target.value });
      const caseIns = new RegExp(searchByTag, "i");
      students.forEach((student) => {
        if (student.tags[0]) {
          for (let tag of student.tags) {
            if (caseIns.test(tag)) {
              filter.push(student);
            }
          }
        }
      });
      this.setState({ filterStudents: filter });
      if (filter.length === 0) {
        toast("We did not find anyone matching your search");
      }
    } else {
      this.setState({ filterStudents: students });
    }
  }

  addTag = (tag, ind) => {
    const { students } = this.state;
    students[ind - 1].tags.push(tag);
  };

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        let res = response.data.students;
        res.forEach((r) => {
          r.tags = [];
        });
        this.setState({
          students: res,
          filterStudents: res,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { students, searchByName, filterStudents } = this.state;
    return (
      <div>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search by name"
            name="search-by-name"
            role="search-by-name"
            onChange={this.handleGetFields}
          ></input>
          <input
            className="search-bar"
            type="text"
            placeholder="Search by tag"
            name="search-by-tag"
            role="search-by-tag"
            onChange={this.handleGetFields}
          ></input>
        </div>
        <ToastContainer limit={1} />
        {filterStudents !== null && (
          <Students filterStudents={filterStudents} addTag={this.addTag} />
        )}
      </div>
    );
  }
}

export default App;
