import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Userslist.css";
import { getUsersData } from "../redux/ActionCreators";
import Scrollbars from "react-custom-scrollbars";
import { generateRandomTime } from "../utils/MockDate";
import { generateRandomTimeForToday } from "../utils/MockDate";

class UsersListComponent extends Component {
  state = {
    isOpen: false,
    userSelected: {},
    date: new Date(),
    infoMessage: "Fetching Data Please Wait...",
    activityPeriods: [
      {
        start_time: generateRandomTimeForToday(5),
        end_time: generateRandomTimeForToday(2),
      },
    ],
  };

  customStyles = {
    content: {
      backgroundColor: "rgb(168, 245, 245)",
      width: "35%",
      height: "75%",
      top: "10%",
      left: "30%",
      borderRadius: "3%",
    },
  };

  handleDateChange = (selectedDate) => {
    let activityPeriodArray = [];
    let count = Math.floor(Math.random() * 3) + 1;
    let hour = 7;
    for (let i = 0; i < count; i++) {
      let start_time = generateRandomTime(selectedDate, hour);
      hour = hour + 3;
      let end_time = generateRandomTime(selectedDate, hour);
      hour = hour + 3;
      activityPeriodArray.push({
        start_time: start_time,
        end_time: end_time,
      });
    }
    this.setState({
      date: selectedDate,
      activityPeriods: activityPeriodArray,
    });
  };

  componentDidMount() {
    let failureCallback = () => {
      this.setState({ infoMessage: "Oops Something Went Wrong!!!" });
    };
    this.props.getUsersData(failureCallback);
  }
  handleListClick = (item) => {
    this.setState({ isOpen: true, userSelected: item });
  };

  handleModalClose = () => {
    this.setState({
      isOpen: false,
      date: new Date(),
      activityPeriods: [
        {
          start_time: generateRandomTime(new Date(), 8),
          end_time: generateRandomTime(new Date(), 11),
        },
      ],
    });
  };

  renderModal = (userSelectedDetail) => {
    if (this.state.isOpen)
      return (
        <div>
          <h4 style={{ textAlign: "center", fontFamily: "cursive" }}>
            User Detail
          </h4>
          <table className="table table-borderless ">
            <tbody>
              <tr>
                <th scope="row">Username</th>
                <td>{userSelectedDetail.real_name}</td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>{userSelectedDetail.tz}</td>
              </tr>
              <tr>
                <th scope="row">Activity Period</th>
                <td>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleDateChange}
                    maxDate={new Date()}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table
            className="table table-sm"
            style={{
              width: "50%",
              backgroundColor: " rgb(196, 248, 248)",
              marginLeft: "20%",
              textAlign: "center",
            }}
          >
            <thead>
              <th></th>
              <th scope="col"> Start Time</th>
              <th scope="col"> End Time</th>
            </thead>
            <tbody>
              {this.state.activityPeriods.map((activityPeriod, index) => {
                return (
                  <tr
                    style={{
                      marginLeft: "35px",
                      fontFamily: "Lucida Sans",
                    }}
                  >
                    <th>{index + 1}</th>
                    <th>{activityPeriod.start_time}</th>
                    <th>{activityPeriod.end_time}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ position: "absolute", right: "10%", bottom: "10%" }}
            onClick={this.handleModalClose}
          >
            Close
          </button>
        </div>
      );
  };

  renderCalendar = () => {
    this.setState({ openCalendar: true });
  };

  render() {
    let listitems = this.props.usersData.token.data;
    let userSelectedDetail = this.state.userSelected;
    return (
      <div className="users-list-container">
        <Modal
          isOpen={this.state.isOpen}
          style={this.customStyles}
          id="user-modal"
        >
          {this.renderModal(userSelectedDetail)}
        </Modal>
        <h3
          style={{
            textAlign: "center",
            paddingTop: "3%",
            fontFamily: "cursive",
          }}
        >
          Users
        </h3>
        <Scrollbars
          style={{ height: "80%" }}
        >
          {listitems.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                fontSize: "30px",
                fontStyle: "italic",
                height: "100%",
              }}
            >
              {this.state.infoMessage}
            </div>
          ) : (
            <ul className="list-group">
              {listitems.members.map((listitem) => (
                <li
                  key={listitem.id}
                  className="list-group-item "
                  onClick={this.handleListClick.bind(this, listitem)}
                >
                  {listitem.real_name}
                </li>
              ))}
            </ul>
          )}
        </Scrollbars>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersData: (failureCallback) => dispatch(getUsersData(failureCallback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListComponent);
