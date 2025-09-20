import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function JobApplication({ data, onDelete }) {
  function statusClass() {
    if (data.status.toLowerCase() === "applied") return "blue";
    else if (data.status.toLowerCase() === "interview") return "yellow";
    else if (data.status.toLowerCase() === "offer") return "green";
    else if (data.status.toLowerCase() === "rejected") return "red";
    else return "gray";
  }

  return (
    <div className="application-card">
      <div className="application-header">
        <div className="company-name">{data.company}</div>
        <div className={`status ${statusClass()}`}>{data.status}</div>
      </div>
      <div className="position">{data.position}</div>
      <div className="dates">
        <span className="align">
          <CalendarMonthIcon fontSize="small" className="color" />
          <span>{data.dateApplied}</span>
        </span>
        <span className="align">
          {data.nextInterview && (
            <AccessTimeIcon fontSize="small" className="color" />
          )}
          <span>{data.nextInterview}</span>
        </span>
      </div>
      <div className="notes">
        <span className="align">
          {data.notes && <EditNoteIcon fontSize="small" className="color" />}
          <span>{data.notes}</span>
        </span>
      </div>
      <div className="actions">
        <span className="cursor">Edit</span>
        <span className="cursor delete" onClick={() => onDelete(data.id)}>
          Delete
        </span>
      </div>
    </div>
  );
}
