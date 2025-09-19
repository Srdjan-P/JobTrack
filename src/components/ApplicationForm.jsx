import { useState } from "react";
import { format } from "date-fns";

export default function ApplicationForm({ onOpen, onAddApplication }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("applied");
  const curDate = new Date();
  const [dateApplied, setDateApplied] = useState(format(curDate, "yyyy-MM-dd"));
  const [nextInterview, setNextInterview] = useState("");
  const [notes, setNotes] = useState("");

  console.log(curDate);

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newApplication = {
      id,
      company,
      position,
      status,
      dateApplied,
      nextInterview,
      notes,
    };
    onAddApplication(newApplication), onOpen(false);
  }

  return (
    <div className="form-container">
      <div className="form-window">
        <div className="form-header">
          <h2>Add Job Application</h2>
          <button onClick={() => onOpen(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                autoCapitalize="words"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date Applied</label>
              <input
                type="date"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Next Interview Date</label>
              <input
                type="date"
                value={nextInterview}
                onChange={(e) => setNextInterview(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button>Save Application</button>
        </form>
      </div>
    </div>
  );
}
