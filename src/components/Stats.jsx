export default function Stats({ applications }) {
  const numApplications = applications.length;
  const numInterviews = applications.filter(
    (app) => app.status.toLowerCase() === "interview"
  ).length;
  const numOffers = applications.filter(
    (app) => app.status.toLowerCase() === "offer"
  ).length;

  return (
    <div className="stats">
      <div className="stats-box">
        <span className="stat-number">{numApplications}</span>
        <span className="stat-label">Applications</span>
      </div>
      <div className="stats-box">
        <span className="stat-number">{numInterviews}</span>
        <span className="stat-label">Interviews</span>
      </div>
      <div className="stats-box">
        <span className="stat-number">{numOffers}</span>
        <span className="stat-label">Offers</span>
      </div>
    </div>
  );
}
