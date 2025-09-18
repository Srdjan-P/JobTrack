export default function ApplicationForm() {
  return <div className="form-container">
    <div className="form-window">
      <div className="form-header">
        <h2>Add Job Application</h2>
        <button>X</button>
      </div>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Company</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select>
              <option value="applied">
                Applied
              </option>
              <option value="interview">
                Interview
              </option>
              <option value="offer">
                Offer
              </option>
              <option value="rejected">
                Rejected
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Date Applied</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>
              Next Interview Date
            </label>
            <input type="date" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Notes</label>
            <textarea></textarea>
          </div>
        </div>
        <button>Save Application</button>
      </form>
    </div>
  </div>
}