import React from 'react';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="container bg-success">
        
        <footer className="shadow">
    <div className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap" style={{ width: "80%" }}>
      <a href="/#" className="d-flex align-items-center p-0 text-dark">
        <span className="ms-4 h3 font-weight-bold fst-italic">FoodOrder</span>
      </a>
      <small>© FoodOrder,{year}. All rights reserved.</small>
    </div>
  </footer>
      </div>
    </div>

  );
}
