import { Button } from "./ui/button";
import "./SignInButton.css";

export const SignInButton = () => {
  return (
    <Button
      type="submit"
      form="login_form"
      className="signin-button"
    >
      Войти
    </Button>
  );
};
