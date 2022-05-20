import React from "react";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <button onClick={onClose}>X</button>
      <h1>Modal</h1>
    </>
  );
};
