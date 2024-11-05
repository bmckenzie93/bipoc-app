import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Header */}
      <header>
        <h1>PNW BIPOC BUSINESSES</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/businesses">Businesses</a>
          <a href="/events">Events</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} PNW BIPOC BUSINESSES</p>
      </footer>
    </div>
  );
};

export default MainLayout