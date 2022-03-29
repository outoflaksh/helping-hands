import RegisterationForm from "../../components/RegisterationForm";
import { Page } from "../../components/styles/Utility.styled";
import level from "../../utils/authLevel";
function Registeration() {
  return (
    <Page>
      <RegisterationForm level={level.worker} />
    </Page>
  );
}

export default Registeration;
