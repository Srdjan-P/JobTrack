import JobApplication from "./JobApplication";

export default function JobApplicationsList({ initialData }) {
  return <div className="jobs-list">
    {initialData.map((data) => <JobApplication data={data} key={data.id} />)}
  </div>
}