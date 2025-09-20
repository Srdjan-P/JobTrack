import { useState } from "react";

export default function Filters() {
  const [filterBy, setFilterBy] = useState("");

  return (
    <div className="filters">
      <h2>Filters</h2>
      <h3>Status</h3>
      <div className="filters-container">
        <label>
          <input type="radio" name="filter" value="all" />
          All Applications
        </label>
        <label>
          <input type="radio" name="filter" value="applied" />
          Applied
        </label>
        <label>
          <input type="radio" name="filter" value="interview" />
          Interview
        </label>
        <label>
          <input type="radio" name="filter" value="offer" />
          Offer
        </label>
        <label>
          <input type="radio" name="filter" value="rejected" />
          Rejected
        </label>
      </div>
    </div>
  );
}
