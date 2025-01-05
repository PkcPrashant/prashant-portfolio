import sections from '../utility/sections';

const Header = () => {
  return (
    <header className="sticky-top z-index-50 bg-black bg-opacity-75">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-md-auto gap-2">
              {
                sections.map((section) => (
                  <li key={section?.label}><a className="nav-link" href={`#${section?.href}`}>{section?.label}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;