import JobCard from "../components/JobCard";
import { Wrapper } from "../components/styles/Utility.styled";

const jobs = [
  {
    type: "Paint",
    location: "ABC Schools",
    address: "19 yemen road, yemen",
    phone: "98xxx123",
    positions: 16,
  },
  {
    type: "Construction",
    location: "XYZ Apartments",
    address: "19 yemen road, yemen",
    phone: "98xxx123",
    positions: 21,
  },
  {
    type: "Paint",
    location: "ABC Schools",
    address: "19 yemen road, yemen",
    phone: "98xxx123",
    positions: 16,
  },
  {
    type: "Construction",
    location: "XYZ Apartments",
    address: "19 yemen road, yemen",
    phone: "98xxx123",
    positions: 21,
  },
];

const Jobs = () => {
  return (
    <Wrapper>
      <h1 style={{ fontWeight: 400, fontSize: "1.8rem", color: "#009C71" }}>
        Recent jobs:
      </h1>
      {jobs.map((job, idx) => (
        <JobCard job={job} key={idx} />
      ))}
    </Wrapper>
  );
};

export default Jobs;
