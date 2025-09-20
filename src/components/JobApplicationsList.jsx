import Button from "./Button";
import JobApplication from "./JobApplication";

export default function JobApplicationsList({
  applications,
  onOpen,
  onDelete,
}) {
  return (
    <div className="jobs-container">
      <div className="jobs-top">
        <h2>Job Applications</h2>
        <Button onClick={() => onOpen(true)}>
          <span className="plus">+</span> <span>Add Application</span>
        </Button>
      </div>
      <div className="jobs-list">
        {applications.map((data) => (
          <JobApplication data={data} key={data.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
