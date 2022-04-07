import { HeroContainer, HeroImage } from "../components/styles/Hero.styled";
import { Button } from "./styles/Common.styled";
import { NavLink } from "react-router-dom";
import { Flex, Page } from "../components/styles/Utility.styled";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Page>
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
    </Page>
  );
};

export default Hero;
