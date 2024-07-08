import { Component } from "react";
import { v4 as uuid } from "uuid";

import NavBar from "../NavBar";
import PostsDisplay from "../PostsDisplay";
import Theme from "../../context/theme";

import "./index.css";

const data = [
  {
    id: 1,
    name: "Mounika",
    comment: "Wylo gives sophisticated tools to run white-labeled communities",
    gender: "female",
    date: "February 2024",
  },
  {
    id: 2,
    name: "Teja",
    comment: "Wylo gives sophisticated tools to run white-labeled communities",
    gender: "male",
    date: "March 2024",
  },
  {
    id: 3,
    name: "Kesav",
    comment: "Wylo gives sophisticated tools to run white-labeled communities",
    gender: "male",
    date: "June 2024",
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class CreatePost extends Component {
  state = {
    userData: data,
    inputName: "",
    inputComment: "",
    gender: "male",
    nameErrorMsg: false,
    commentErrorMsg: false,
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputComment = (event) => {
    this.setState({ inputComment: event.target.value });
  };

  onClickRadioButton = (event) => {
    this.setState({ gender: event.target.value });
  };

  onPostNewData = (event) => {
    event.preventDefault();
    const { inputName, inputComment, gender } = this.state;
    const newDate = new Date();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const monthName = monthNames[month];
    const postedDate = `${monthName} ${year}`;
    console.log(postedDate);

    if (inputName !== "" && inputComment !== "") {
      const newData = {
        id: uuid(),
        name: inputName,
        comment: inputComment,
        gender: gender,
        date: postedDate,
      };
      this.setState((prevState) => ({
        userData: [...prevState.userData, newData],
        inputName: "",
        inputComment: "",
      }));
    }
  };

  formDetails = () => {
    const { inputName, inputComment, nameErrorMsg } = this.state;
    return (
      <form className="Form" onSubmit={this.onPostNewData}>
        <h1 className="main-heading">Wylo Feedback</h1>
        <div className="InputContainer">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input
            className="Input"
            type="text"
            id="name"
            value={inputName}
            placeholder="Enter Name"
            onChange={this.onChangeInputName}
          />
          {nameErrorMsg && <p>Name is required</p>}
        </div>
        <div className="InputContainer">
          <p className="Label">Gender</p>
          <div className="RadioContainer">
            <input
              type="radio"
              id="gender"
              name="gender"
              value="male"
              onChange={this.onClickRadioButton}
            />
            <label htmlFor="gender" className="Label">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={this.onClickRadioButton}
            />
            <label htmlFor="female" className="Label">
              Female
            </label>
          </div>
        </div>
        <div className="InputContainer">
          <label className="Label" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="text-area"
            rows={7}
            cols={100}
            id="comment"
            value={inputComment}
            placeholder="Enter Comment"
            onChange={this.onChangeInputComment}
          />
        </div>
        <button
          className="PostButton"
          type="submit"
          onClick={this.onPostNewData}
        >
          Post
        </button>
      </form>
    );
  };

  render() {
    const { userData } = this.state;
    console.log(userData);
    return (
      <>
        <NavBar />
        <Theme.Consumer>
          {(value) => {
            const { isDarkTheme } = value;
            return (
              <div
                className={`FormContainer ${isDarkTheme ? "dark" : "light"}`}
              >
                {this.formDetails()}
                <div className="post-container">
                  <PostsDisplay userData={userData} />
                </div>
              </div>
            );
          }}
        </Theme.Consumer>
      </>
    );
  }
}

export default CreatePost;
