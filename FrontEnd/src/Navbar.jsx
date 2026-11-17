/* Presentational component only: wire up search, notifications, profile menu and menu toggle yourself. */
export default function Navbar({toggleSidebar}) {
  
  return (
    <header className="navbar">
      <button className="icon-button navbar__menu" type="button" onClick={toggleSidebar} aria-label="Toggle sidebar">
        ☰
      </button>

      <a className="navbar__brand" href="#home" aria-label="Speech to Text Notes home">
        <span className="navbar__brand-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg></span>
        <span className="navbar__brand-name">Speech to <span>Notes</span></span>
      </a>

      {/* <label className="navbar__search">
        <span className="navbar__search-icon" aria-hidden="true"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg></span>
        <input type="search" placeholder="Search your notes..." aria-label="Search your notes" />
      </label> */}

      <div className="navbar__actions">
        {/* <button className="icon-button" type="button" aria-label="Notifications"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z"/></svg></button> */}
        <button className="navbar__profile" type="button" aria-label="Open profile menu">
          <span className="avatar">G</span>
          <span className="navbar__profile-meta">
            <span className="navbar__profile-name">Guest</span>
          </span>
          {/* <span className="navbar__profile-chevron" aria-hidden="true">⌄</span> */}
        </button>
      </div>
    </header>
  );
}
