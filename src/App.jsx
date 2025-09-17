import Logo from "./components/Logo";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import Filters from "./components/Filters"
import JobApplicationsList from "./components/JobApplicationsList"

export default function App() {
  return <div className="app-layout">
    <Nav>
      <Logo />
      <Stats />
    </Nav>
    <Main>
      <Filters />
      <JobApplicationsList />
    </Main>
  </div>
}