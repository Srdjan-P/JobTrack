import JobApplication from "./JobApplication";

export default function JobApplicationsList({ applications, onOpen }) {
  return (
    <div className="jobs-container">
      <div className="jobs-top">
        <h2>Job Applications</h2>
        <button onClick={() => onOpen(true)}>+ Add Application</button>
      </div>
      <div className="jobs-list">
        {applications.map((data) => (
          <JobApplication data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
