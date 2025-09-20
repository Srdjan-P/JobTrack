import { useState } from "react";

export default function Filters({ applications, setFilteredData }) {
  const [filterBy, setFilterBy] = useState("all");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterBy(value);

    if (value === "all") {
      setFilteredData(applications);
    } else {
      const filtered = applications.filter(
        (applications) => applications.status.toLowerCase() === value
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <h3>Status</h3>
      <div className="filters-container">
        <label className={filterBy === "all" ? "active" : ""}>
          <input
            type="radio"
            name="filter"
            value="all"
            onChange={handleFilterChange}
            checked={filterBy === "all"}
          />
          All Applications
        </label>
        <label className={filterBy === "applied" ? "active" : ""}>
          <input
            type="radio"
            name="filter"
            value="applied"
            onChange={handleFilterChange}
            checked={filterBy === "applied"}
          />
          Applied
        </label>
        <label className={filterBy === "interview" ? "active" : ""}>
          <input
            type="radio"
            name="filter"
            value="interview"
            onChange={handleFilterChange}
            checked={filterBy === "interview"}
          />
          Interview
        </label>
        <label className={filterBy === "offer" ? "active" : ""}>
          <input
            type="radio"
            name="filter"
            value="offer"
            onChange={handleFilterChange}
            checked={filterBy === "offer"}
          />
          Offer
        </label>
        <label className={filterBy === "rejected" ? "active" : ""}>
          <input
            type="radio"
            name="filter"
            value="rejected"
            onChange={handleFilterChange}
            checked={filterBy === "rejected"}
          />
          Rejected
        </label>
      </div>
    </div>
  );
}
