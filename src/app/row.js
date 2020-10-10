import React from "react";

// memo because this component is going to be called to render a lot due to changes coming in from a websocket
// React.memo will cache the value of the props of the component and only re-renders when those props have changed
export const Row = React.memo(function RowComponent({ id, value, name }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{value}</td>
      <td>{name}</td>
    </tr>
  );
});
