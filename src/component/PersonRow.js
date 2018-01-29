import React, { Component } from 'react';
import EditableCell from './EditableCell'

class PersonRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.person);
    }

    render() {
        debugger
        console.log('this.props.person',this.props.person)
        return (
            <tr className="eachRow">
                <EditableCell onPersonTableUpdate={this.props.onPersonTableUpdate} cellData={{
                    "type": "firstName",
                    value: this.props.person.firstName,
                    id: this.props.person.id
                }}
                />
                <EditableCell onPersonTableUpdate={this.props.onPersonTableUpdate} cellData={{
                    type: "lastName",
                    value: this.props.person.lastName,
                    id: this.props.person.id
                }}
                />
                <EditableCell onPersonTableUpdate={this.props.onPersonTableUpdate} cellData={{
                    type: "DOB",
                    value: this.props.person.DOB,
                    id: this.props.person.id
                }}
                />
                <EditableCell onPersonTableUpdate={this.props.onPersonTableUpdate} cellData={{
                    type: "PhoneNumber",
                    value: this.props.person.PhoneNumber,
                    id: this.props.person.id
                }}
                />
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
                </td>
            </tr>
        );
    }
}

export default PersonRow