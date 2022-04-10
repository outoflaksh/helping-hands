import { Card } from "./styles/Job.styled";
import { Button } from "./styles/Common.styled";

const JobCard = ({ job }) => {
  return (
    <Card>
      <h1>
        {job.jobTitle} job - {job.jobLocation}
      </h1>
      <h2>Positions left: {job.positions || 5}</h2>
      <h2>
        <span>Dates: {job.dates}</span>
      </h2>
      <h3>
        Ph: {job.contactNumber}; Addr: {job.jobAddress}
      </h3>
      <Button>Apply</Button>
    </Card>
  );
};

export default JobCard;
