
//use client when using js logic
"use client"

import React from 'react';

// styles
const classes = {
  container: {
    border: 'solid 1px gray',
    width: '400px',
    background: 'beige',
    padding: '1rem',
  },
  name: { color: 'red' },
  email: { fontStyle: 'italic', fontWeight: 'bold' },
};

// component
function UserCard() {
  return (
    <div style={classes.container}>
      <p>id</p>
      <h1 style={classes.name}>Fulano de tal </h1>
      <p style={classes.email}>fulanodetal@hotmail.com</p>
    </div>
  );
}

export default UserCard