// Event component
/*

This component represents a single row in its parent EventList component

*/

// IMPORTS
import React from 'react';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

// STATELESS CLASS COMPONENT
export class Event extends React.Component {
  constructor(props) {
    super(props);

    // Bindings
    this._actionColor = this._actionColor.bind(this);
  }

  // Class method for determining the color of our event headline. Takes in the action and type and returns DOM nodes based on the action
  _actionColor() {
    const { type, action } = this.props;

    switch (action) {
      case 'added':
        return (
          <span className="green">
            <b>{type.charAt(0).toUpperCase() + type.slice(1)}</b> {action}
          </span>
        );
      case 'changed':
        return (
          <span className="gold">
            <b>{type.charAt(0).toUpperCase() + type.slice(1)}</b> {action}
          </span>
        );
      case 'removed':
      case 'deleted':
        return (
          <span className="coral">
            <b>{type.charAt(0).toUpperCase() + type.slice(1)}</b> {action}
          </span>
        );
      default:
        return (
          <span>
            <b>{type.charAt(0).toUpperCase() + type.slice(1)}</b> {action}
          </span>
        );
    }
  }

  // Render method for row, consumes props and returns DOM nodes
  render() {
    const { id, type, action, time, parent } = this.props;
    return (
      <div className="event">
        <h3 className="eventAction">{this._actionColor()}</h3>
        <p className="eventTime">{format(parse(time), 'HH:mm:ss')}</p>
        <p className="eventId">{parent ? `${parent}/${id}`: id}</p>
      </div>
    );
  }
}
