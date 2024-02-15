import FormHeader from "./FormHeader";
import FormSection from "./FormSection";
import FormSideContent from "./FormSideContent";
import LoginForm from "./LoginForm";
import ButtonNavToForm from "./ButtonNavToForm";
import FormFillOut from "./FormFillOut";

function LoginPage() {
  return (
    <FormSection>
      <FormSideContent order="last">
        <h2 className="heading-2 form__heading-2">Welcome aboard!</h2>
        <p>
          Embark on your adventure with Evintix by entering your details let the
          magic begin!
        </p>
        <ButtonNavToForm link="create-account">sign up</ButtonNavToForm>
      </FormSideContent>

      <FormFillOut>
        <FormHeader>Unlock exclusive expriences with</FormHeader>
        <LoginForm />
      </FormFillOut>
    </FormSection>
  );
}
export default LoginPage;
