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

  function handleAddApplication(application) {
    setApplications((applications) => [...applications, application]);
  }

  return (
    <div className="app-layout">
      <Header>
        <Logo />
        <Stats applications={applications} />
      </Header>
      <Main>
        <Filters />
        <JobApplicationsList applications={applications} onOpen={setIsOpen} />
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
