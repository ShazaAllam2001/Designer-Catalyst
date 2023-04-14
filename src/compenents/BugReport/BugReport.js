import './BugReport.css';

export function BugReport() {
  return (
    <div className="bug-report">
      <div className="bug-card">
        <h1> Report a Bug </h1>
        <form className="bug">
          <h2> Title </h2>
          <input type="text" className="bug-title" />

          <h2> Description </h2>
          <textarea className="bug-description"></textarea>
        </form>
        <div className="submit">
          <input type="submit" className="block-button-small" />
        </div>
      </div>
    </div>
  );
}

