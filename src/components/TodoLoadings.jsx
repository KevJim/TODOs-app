import React from 'react';
import "../assets/css/TodoLoading.css"

function TodoLoading() {
  return (
    <>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text"></p>
      </div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text"></p>
      </div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text"></p>
      </div>
    </>
  );
}

export { TodoLoading };