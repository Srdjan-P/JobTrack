import Button from "./Button";
import JobApplication from "./JobApplication";

export default function JobApplicationsList({
  onOpen,
  onDelete,
  filteredData,
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
        {filteredData.map((data) => (
          <JobApplication data={data} key={data.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
