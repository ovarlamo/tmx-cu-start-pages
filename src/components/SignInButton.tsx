import { Button } from "./ui/button";

export const SignInButton = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("login_form") as HTMLFormElement;
    if (form) {
      form.submit();
    }
  };

  return (
    <Button
      type="submit"
      form="login_form"
      className="w-full bg-[#004f9f] hover:bg-[#003d7a] text-white [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[13px]"
    >
      Войти
    </Button>
  );
};
