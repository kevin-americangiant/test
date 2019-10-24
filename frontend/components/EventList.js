// EventList component
/*

Component that connects to a websocket and renders an infinite and virtualized list of Events for every value emitted by the websocket.

There are three states that this component can render based on the state.display:
- '' = null
- 'empty' = empty state
- 'list' = list of events

*/

// IMPORTS

import React from 'react';
import List from 'react-virtualized/dist/es/List';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import WindowScroller from 'react-virtualized/dist/es/WindowScroller';
import io from 'socket.io-client';
import { Event } from './Event';
import { EmptyState } from './EmptyState';

// STATEFUL CLASS COMPONENT

export class EventList extends React.Component {
  
  // Constructor method to create some initial state and handle method bindings
  constructor(props) {
    super(props);
    
    // state
    this.state = {
      events: [],
      empty: true
    };

    // bindings
    this._renderEvents = this._renderEvents.bind(this);
  }

  componentWillMount() {    
    // connect to our websocket
    const socket = io();
    
    // when websocket emits events and has data, setState to add that data to our `events` array
    socket.on('newEvents', data => {
      console.log(data);
      if(data.length > 0) {
        
        console.log(data);
        this.setState({ events: [...data, ...this.state.events], empty: false });
      }
    });
    
    // when websocket emits errors set our state to display that error
    socket.on('newError', data => {
        this.setState({ display: 'error', errorMessage: data });
    });
  }

  // Method for rendering each individual event in our list. This is a react-virtualized thang.
  _renderEvents({ index, key, style }) {
    const { events } = this.state;
    
    return (
      <div key={key} style={style}>
        <Event
          type={events[index].resource.resource_type}
          action={events[index].action}
          id={events[index].resource.gid}
          time={events[index].created_at}
          parent={events[index].parent}
        />
      </div>
    );
  }
  
  // Render method that creates a react-virtualized WindowScroller + List (so scrolling our window changes which elements are being rendered)
  render() {
    const { events, empty } = this.state;
    console.log(this.state)
    
    if (empty) {
      return <EmptyState />
    } else {
        return (
          <WindowScroller className="eventList">
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <AutoSizer className="scrollContainer" disableHeight>
                {({ width }) => (
                  <List
                    autoHeight
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    overscanRowCount={2}
                    rowCount={events.length}
                    rowHeight={50}
                    rowRenderer={this._renderEvents}
                    scrollTop={scrollTop}
                    width={width}
                    className="innerList"
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        );
    }
  }
}