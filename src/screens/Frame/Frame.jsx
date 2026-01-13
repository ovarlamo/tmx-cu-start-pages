import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { SignInButton } from "../../components/SignInButton";
import "./Frame.css";

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
    <div className="frame-container">
      <img
        className="frame-bg-image"
        alt="Background pattern"
        src="/group.png"
      />

      <div className="frame-content">
        <section className="frame-left-section">
          <div className="frame-title-section">
            <h1 className="frame-title">
              Приветствуем Вас
              <br />
              на портале обучения и развития!
            </h1>

            <h2 className="frame-subtitle">
              Корпоративный университет ТМХ — это:
            </h2>
          </div>

          <div className="frame-bullet-points">
            {bulletPoints.map((point, index) => (
              <div key={index} className="frame-bullet-item">
                <img
                  className="frame-bullet-icon"
                  alt="Feature icon"
                  src={point.icon}
                />
                <p className="frame-bullet-text">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <form action="/home" id="login_form" method="post">
          <Card className="frame-card">
            <CardContent className="frame-card-content">
              <div className="frame-card-logo">
                <img alt="TMX Logo" src="/group-4.png" />
              </div>

              <div className="frame-card-header">
                <h3 className="frame-card-title">
                  Для начала работы на портале
                  <br />
                  введите логин и пароль
                </h3>
              </div>

              <div className="frame-card-fields">
                <div className="frame-form-group">
                  <Label
                    htmlFor="login"
                    className="frame-label"
                  >
                    Логин
                  </Label>
                  <Input id="login" type="text" name="login" />
                </div>

                <div className="frame-form-group">
                  <Label
                    htmlFor="password"
                    className="frame-label"
                  >
                    Пароль
                  </Label>
                  <Input id="password" type="password" name="password" />
                </div>

                <button className="frame-forgot-link">
                  Забыли или не знаете пароль?
                </button>
              </div>

              <div className="frame-card-actions">
                <SignInButton />

                <div className="frame-divider">
                  или
                </div>

                <Button
                  variant="outline"
                  className="frame-register-button"
                >
                  Зарегистрироваться
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

      <img
        className="frame-decoration"
        alt="Decorative vector"
        src="/vector.svg"
      />
    </div>
  );
};
