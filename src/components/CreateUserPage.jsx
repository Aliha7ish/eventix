import ButtonComp from "./ButtonComp";
import FormFillOut from "./FormFillOut";
import FormHeader from "./FormHeader";
import FormSection from "./FormSection";
import FormSideContent from "./FormSideContent";
import SignupForm from "./SignupForm";

function CreateUserPage() {
  function isError(expr1, expr2) {
    return expr1 && expr2;
  }
  return (
    <FormSection>
      <FormSideContent order="first">
        <h2 className="heading-2 form__heading-2">Welcome back!</h2>
        <p>
          Excited to have you return! Let’s shape unforgettable events together.
        </p>

        <ButtonComp link="login" className="btn-transparent btn-nav-form">
          logIn
        </ButtonComp>
      </FormSideContent>

      <FormFillOut>
        <FormHeader />
        <SignupForm isError={isError} />
      </FormFillOut>
    </FormSection>
  );
}

export default CreateUserPage;
