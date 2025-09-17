export default function JobApplication({ data }) {
  return <div className="application-card">
    <div className="application-header">
      <div className="company-name">
        {data.company}
      </div>
      <div>
        {data.status}
      </div>
    </div>
    <div className="position">
      {data.position}
    </div>
    <div className="dates">
      <span>
        {data.dateApplied}
      </span>
      <span>{data.nextInterview}</span>
    </div>
    <div className="notes">
      {data.notes}
    </div>
    <div className="actions">
      <span>Edit</span>
      <span>Delete</span>
    </div>
  </div>
}