import {
  HeroContainer,
  Button,
  HeroImage,
} from "../components/styles/Hero.styled";
import { NavLink } from "react-router-dom";
import { Flex } from "../components/styles/Utility.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <Flex direction="row" align="center">
        <Flex direction="column" justify="center" align="flex-start">
          <h1>
            Be your own
            <br />
            <span>boss.</span>
          </h1>
          <h3>
            No more <span>injustice.</span> No more <span>slavery.</span>
          </h3>
          <Button>
            <NavLink to="/auth/worker/register">Register</NavLink>
          </Button>
        </Flex>
        <HeroImage src="./illustration-bird.png" alt="" />
      </Flex>
    </HeroContainer>
  );
};

export default Hero;
