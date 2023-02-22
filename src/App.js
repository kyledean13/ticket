import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: "",
            date: "",
            opps: "",
            section: "",
            row: "",
            seat: "",
            render: false,
        };
    }

    renderTicket() {
        return (
            <div>
                <div
                    style={{
                        position: "absolute",
                        top: "109px",
                        left: "270px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "300",
                    }}
                >
                    {this.state.time}
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "119px",
                        left: "215px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "300",
                    }}
                >
                    {this.state.date}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "251px",
                        left: "25px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "300",
                    }}
                >
                    {"Lightning vs " + this.state.opps}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "289.5px",
                        left: "25px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "300",
                    }}
                >
                    {this.state.section}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "289.5px",
                        left: "163.5px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "300",
                    }}
                >
                    {this.state.row}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "289.5px",
                        left: "285px",
                        zIndex: "3",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "300",
                    }}
                >
                    {this.state.seat}
                </div>
                <img
                    onClick={() => {
                        this.setState({ render: false });
                    }}
                    style={{
                        position: "relative",
                        zIndex: "1",
                        width: "331px",
                    }}
                    src="https://i.ibb.co/YyqqrbT/ticket.png"
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
