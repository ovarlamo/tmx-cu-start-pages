import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { SignInButton } from "../../components/SignInButton";

const bulletPoints = [
  {
    icon: "/group-3.png",
    text: "возможность для профессионального и карьерного роста работников и руководителей машиностроительной отрасли",
  },
  {
    icon: "/group-2.png",
    text: "организация обучающих программ и тренингов, направленных на повышение квалификации и развитие навыков работников",
  },
  {
    icon: "/group-1.png",
    text: "подготовка и обучение потенциальных лидеров и специалистов высокого уровня",
  },
];

export const Frame = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#003d7a] to-[#001f3f] relative overflow-hidden">
      <img
        className="absolute w-full h-full object-cover opacity-30"
        alt="Background pattern"
        src="/group.png"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between gap-12">
        <section className="flex-1 text-white space-y-8">
          <div className="space-y-4">
            <h1 className="[font-family:'Brutal_Type-Medium',Helvetica] font-medium text-[28px] leading-normal">
              Приветствуем Вас
              <br />
              на портале обучения и развития!
            </h1>

            <h2 className="[font-family:'Brutal_Type-Medium',Helvetica] font-medium text-[28px] leading-normal">
              Корпоративный университет ТМХ — это:
            </h2>
          </div>

          <div className="space-y-6">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  className="w-[68px] h-[61px] flex-shrink-0"
                  alt="Feature icon"
                  src={point.icon}
                />
                <p className="[font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[21px] leading-normal">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <form action="/home" id="login_form" method="post">
          <Card className="w-full max-w-[452px] bg-white rounded-[15px] shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-center">
                <img className="h-[41px]" alt="TMX Logo" src="/group-4.png" />
              </div>

              <div className="space-y-2">
                <h3 className="[font-family:'Brutal_Type-Medium',Helvetica] font-medium text-black text-xl leading-normal">
                  Для начала работы на портале
                  <br />
                  введите логин и пароль
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="login"
                    className="[font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#757576] text-[13px]"
                  >
                    Логин
                  </Label>
                  <Input id="login" type="text" name="login" className="w-full" />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="[font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#757576] text-[13px]"
                  >
                    Пароль
                  </Label>
                  <Input id="password" type="password" name="password" className="w-full" />
                </div>

                <button className="[font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#004f9f] text-xs text-right w-full hover:underline">
                  Забыли или не знаете пароль?
                </button>
              </div>

              <div className="space-y-3">
                <SignInButton />

                <div className="text-center [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#4a4a49] text-[13px]">
                  или
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#004f9f] text-[#004f9f] hover:bg-[#004f9f] hover:text-white [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[13px]"
                >
                  Зарегистрироваться
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

      <img
        className="absolute bottom-0 left-1/4 w-[884px] opacity-20 pointer-events-none"
        alt="Decorative vector"
        src="/vector.svg"
      />
    </div>
  );
};
