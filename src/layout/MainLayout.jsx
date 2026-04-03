import React from "react";

export default function MainLayout({ children }) {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
      {/* Example common UI */}
      <header>My App Header</header>

      <main>{children}</main>

      <footer>My App Footer</footer>
    </div>
  );
}