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
        <span>{numApplications}</span> Applications
      </div>
      <div className="stats-box">
        <span>{numInterviews}</span> Interviews
      </div>
      <div className="stats-box">
        <span>{numOffers}</span> Offers
      </div>
    </div>
  );
}
