import styled from "styled-components";

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
    </Card>
  );
};

const Card = styled.div`
  background: #b7ffeb;
  padding: 15px 25px;
  margin-top: 15px;
  border-radius: 25px;
  width: 55%;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #4d5d77;
  }

  h2,
  h3,
  p {
    color: #c07b8c;
    font-weight: 400;
  }

  h2 {
    font-size: 1.4rem;

    span {
      font-style: italic;
    }
  }

  h3 {
    font-size: 1.2rem;
  }
`;

export default JobCard;
