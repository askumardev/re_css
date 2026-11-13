import "../header.css";

function Header({ groups, homeHref = "" }) {
  return (
    <>
      <header>
        <h1 className="header-title">React Preparation</h1>
        <p>Browse core concepts and examples for your React preparation.</p>
      </header>
      <nav className="demo-navbar" aria-label="React preparation topics">
        <ul className="navbar-list">
          {groups.map((group) => (
            <li className="navbar-item" key={group.id}>
              <a className="navbar-link" href={`${homeHref}#${group.id}`}>
                {group.title}
              </a>
              <ul className="dropdown-menu">
                {group.topics.map((topic) => (
                  <li key={topic.id}>
                    <a href={topic.href || `${homeHref}#${topic.id}`}>
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;