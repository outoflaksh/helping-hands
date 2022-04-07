import {
  HeroContainer,
  HeroImage,
} from "../components/styles/Hero.styled";
import { Button } from "./styles/Common.styled";
import { NavLink } from "react-router-dom";
import { Flex } from "../components/styles/Utility.styled";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
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
          <br />
          <br />
          {
            currentUser ?
              undefined
              :
              <Button>
                <NavLink to="/auth/register">Register</NavLink>
              </Button>
          }

        </Flex>
        <HeroImage src="./illustration-bird.png" alt="" />
      </Flex>
    </HeroContainer>
  );
};

export default Hero;
