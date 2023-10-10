import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import moment from "moment";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: "5:30 PM",
            date: "Oct 10, 2023",
            opps: "Predators",
            section: "110",
            row: "F",
            seat: "2",
            render: true,
        };
    }

    renderTicket() {
        return (
            <div>
                <div
                    style={{
                        position: "absolute",
                        top: "12px",
                        left: "19.5px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "550",
                    }}
                >
                    {moment().format("h:mm")}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "93px",
                        left: "201px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "9px",
                        fontWeight: "450",
                    }}
                >
                    {this.state.time}
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "101px",
                        left: "200px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "400",
                    }}
                >
                    {this.state.date}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "232.5px",
                        left: "25px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "400",
                    }}
                >
                    {"Lightning vs " + this.state.opps}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "270.5px",
                        left: "25px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "400",
                    }}
                >
                    {this.state.section}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "270.5px",
                        left: "164px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "400",
                    }}
                >
                    {this.state.row}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "270.5px",
                        left: "287px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "400",
                    }}
                >
                    {this.state.seat}
                </div>
                <img
                    onClick={() => {
                        this.setState({ render: false });
                    }}
                    style={{
                        position: "absolute",
                        zIndex: "1",
                        width: "331px",
                    }}
                    src="https://i.ibb.co/TBYF4wL/ezgif-3-60c188398b.gif"
                ></img>
                <img
                    onClick={() => {
                        this.setState({ render: false });
                    }}
                    style={{
                        position: "absolute",
                        zIndex: "1",
                        width: "331px",
                    }}
                    src="https://i.ibb.co/9TvSFZC/tix2.png"
                ></img>
            </div>
        );
    }

    renderOther() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <div>Put in information in the format below</div>
                    <div>Press submit to generate ticket, then screenshot</div>
                    <div>To change info after submitting, click on ticket</div>
                </div>

                <div>Game Time</div>
                <input
                    value={this.state.time}
                    placeholder={"7:00 PM"}
                    onChange={(event) => {
                        this.setState({ time: event.target.value });
                    }}
                ></input>
                <div>Game Date</div>
                <input
                    value={this.state.date}
                    placeholder={"Oct 22, 2022"}
                    onChange={(event) => {
                        this.setState({ date: event.target.value });
                    }}
                ></input>
                <div>Opps</div>
                <input
                    value={this.state.opps}
                    placeholder={"Sabres"}
                    onChange={(event) => {
                        this.setState({ opps: event.target.value });
                    }}
                ></input>
                <div>Section</div>
                <input
                    value={this.state.section}
                    placeholder={"110"}
                    onChange={(event) => {
                        this.setState({ section: event.target.value });
                    }}
                ></input>
                <div>Row</div>
                <input
                    value={this.state.row}
                    placeholder={"F"}
                    onChange={(event) => {
                        this.setState({ row: event.target.value });
                    }}
                ></input>
                <div>Seat</div>
                <input
                    value={this.state.seat}
                    placeholder={"2"}
                    onChange={(event) => {
                        this.setState({ seat: event.target.value });
                    }}
                ></input>
                <button
                    style={{ marginTop: "10px", width: "100px" }}
                    onClick={() => {
                        this.setState({ render: true });
                    }}
                >
                    Submit
                </button>
            </div>
        );
    }

    render() {
        if (this.state.render) {
            return this.renderTicket();
        } else {
            return this.renderOther();
        }
    }
}

export default App;
