import { Card, Button } from "./styles/Job.styled";

const JobCard = ({ job }) => {
  return (
    <Card>
      <h1>
        {job.type} job - {job.location}
      </h1>
      <h2>Positions left: {job.positions}</h2>
      <h2>
        <span>Dates: 1/1/22 to 1/2/22</span>
      </h2>
      <h3>
        Ph: {job.phone}; Addr: {job.address}
      </h3>
      <Button>Apply</Button>
    </Card>
  );
};

export default JobCard;
