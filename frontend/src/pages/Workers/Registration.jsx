import RegisterationForm from "../../components/RegisterationForm";
import { FormContainer } from "../../components/styles/Form.styled";
import level from "../../utils/authLevel";
function Registeration() {
  return (
    <FormContainer>
      <RegisterationForm level={level.worker} />
    </FormContainer>
  );
}

export default Registeration;
