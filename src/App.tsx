import React from "react";
import StudentForm from "./components/StudentForm.tsx";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <StudentForm  
                    name="Петро"
                    surname="Шевченко"
                    age={20}
                    rating={11}
                />
            </div>
        );
    }
}