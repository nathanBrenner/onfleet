import React, { useState, useEffect } from "react";
import Faker from "faker";
import { Row } from "./row";
import "./table.css";

const mockData = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  value: i,
  name: Faker.name.firstName(),
}));

function sortDesc(a, b) {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
}

export function Table() {
  const [list, setList] = useState(mockData);

  useEffect(() => {
    // This code was based off of the code from exampleClient.
    // Before I found that code,
    // I looked at the documentation for ws,
    // the examples of the client in the ws repo
    // the code in server.js
    // and a few online resources like some pages on MDN about Websockets, and socket.io
    const ws = new WebSocket("ws://localhost:7770");

    ws.onopen = function open() {
      ws.send("init");
    };

    ws.onmessage = function incoming(data) {
      var message = null;
      try {
        message = JSON.parse(data.data);
      } catch (e) {
        console.log("malformed message");
      }
      if (message) {
        // when the message is truthy, update the state of the list
        // by mapping over every item in the list (for immutibility)
        // and replace the item on the list if the id in the message matches
        // then sort the list by the value field
        setList((currentValue) =>
          currentValue
            .map((item) => (item.id === message.id ? message : item))
            .sort(sortDesc)
        );
      }
    };

    return () => ws.close();
  }, []);

  // I initially did this with css grid, then I reverted back to html table
  // I hate the way html tables look, but css grid comes with the cost of reduced performance
  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr>
            <th className="table__header">id</th>
            <th className="table__header">value</th>
            <th className="table__header">name</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, value, name }) => (
            <Row key={`${name}-${id}`} id={id} value={value} name={name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
