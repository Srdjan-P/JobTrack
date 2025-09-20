import Logo from "./components/Logo";
import Main from "./components/Main";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Filters from "./components/Filters";
import JobApplicationsList from "./components/JobApplicationsList";
import ApplicationForm from "./components/ApplicationForm";
import { useState } from "react";

const initialApplications = [
  {
    id: 1,
    company: "Google",
    position: "Front-End Developer",
    status: "Interview",
    dateApplied: "17-09-2025",
    nextInterview: "01-10-2025",
    notes: "Technical interview with team lead",
  },
  {
    id: 2,
    company: "Amazon",
    position: "React Developer",
    status: "Applied",
    dateApplied: "20-09-2025",
    nextInterview: "",
    notes: "Waiting for response",
  },
  {
    id: 3,
    company: "Netflix",
    position: "UI Engineer",
    status: "Rejected",
    dateApplied: "25-08-2025",
    nextInterview: "",
    notes: "Went with another candidate",
  },
  {
    id: 4,
    company: "Facebook",
    position: "JavaScript Developer",
    status: "Offer",
    dateApplied: "03-09-2025",
    nextInterview: "",
    notes: "Offer received: $50k + benefits",
  },
];

export default function App() {
  const [applications, setApplications] = useState(initialApplications);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(applications);

  function handleAddApplication(application) {
    setApplications((applications) => [...applications, application]);
    setFilteredData((filteredData) => [...filteredData, application]);
  }

  function handleDeleteApp(id) {
    setApplications((applications) =>
      applications.filter((application) => application.id !== id)
    );
    setFilteredData((filteredData) =>
      filteredData.filter((application) => application.id !== id)
    );
  }

  return (
    <div className="app-layout">
      <Header>
        <Logo />
        <Stats applications={applications} />
      </Header>
      <Main>
        <Filters
          applications={applications}
          setFilteredData={setFilteredData}
        />
        <JobApplicationsList
          applications={applications}
          onOpen={setIsOpen}
          onDelete={handleDeleteApp}
          filteredData={filteredData}
        />
      </Main>
      {isOpen && (
        <ApplicationForm
          onOpen={setIsOpen}
          onAddApplication={handleAddApplication}
        />
      )}
    </div>
  );
}
