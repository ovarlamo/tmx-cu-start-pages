import { Button } from "../ui/button";
import { TextField } from "../TextField/TextField";
import group2 from "/group-2.png";
import group3 from "/group-3.png";
import group4 from "/group-4.png";
import group from "/group.png";
import image from "/image.png";
import image1 from "./image.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector from "./vector.svg";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-transparent grid justify-items-center [align-items:start] w-screen">
      <div className="overflow-hidden w-[2779.44px] h-[972.43px] flex items-start gap-[42px]">
        <div className="w-[2827px] ml-[-1329px] mt-[-480.21px] flex flex-col items-end min-h-[1186px]">
          <div className="w-[2827px] h-[981px] relative">
            <img
              className="absolute w-[2719px] h-[966px] top-0 left-0"
              alt="Group"
              src={group4}
            />

            <img
              className="absolute w-[884px] h-[532px] top-[225px] left-[685px]"
              alt="Vector"
              src={vector}
            />

            <p className="absolute w-[620px] top-[910px] left-[2207px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
              возможность для профессионального и <br />
              карьерного роста работников и руководителей
              <br />
              машиностроительной отрасли
            </p>

            <p className="absolute w-[591px] top-[852px] left-[2115px] [font-family:'Brutal_Type-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
              Корпоративный университет ТМХ — это:
            </p>

            <p className="absolute w-[591px] top-[740px] left-[2115px] [font-family:'Brutal_Type-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
              Приветствуем Вас
              <br />
              на портале обучения и развития!
            </p>

            <img
              className="absolute w-[68px] h-[61px] top-[645px] left-[726px]"
              alt="Group"
              src={group}
            />

            <img
              className="absolute w-[68px] h-[61px] top-[538px] left-[726px]"
              alt="Group"
              src={image}
            />

            <img
              className="absolute w-[68px] h-[61px] top-[430px] left-[726px]"
              alt="Group"
              src={group3}
            />

            <img
              className="absolute w-[344px] h-[42px] top-[566px] left-[1538px]"
              alt="Vector"
              src={vector4}
            />

            <img
              className="absolute w-[344px] h-[46px] top-[670px] left-[1538px]"
              alt="Vector"
              src={vector2}
            />

            <img
              className="absolute w-[345px] h-10 top-[429px] left-[1537px]"
              alt="Vector"
              src={image1}
            />

            <img
              className="absolute w-[345px] h-10 top-[481px] left-[1537px]"
              alt="Vector"
              src={image1}
            />

            <img
              className="absolute w-[154px] h-px top-[641px] left-[1537px]"
              alt="Vector"
              src={vector3}
            />

            <img
              className="absolute w-[154px] h-px top-[641px] left-[1727px]"
              alt="Vector"
              src={vector3}
            />

            <img
              className="absolute w-[231px] h-[42px] top-[263px] left-[1531px]"
              alt="Group"
              src={group2}
            />
          </div>

          <p className="w-[620px] min-h-[71px] mt-[37px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
            организация обучающих программ и тренингов, направленных на
            повышение квалификации
            <br />
            �и развитие навыков работников
          </p>

          <p className="w-[620px] min-h-[51px] mt-[46px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
            подготовка и обучение потенциальных лидеров
            <br />
            �и специалистов высокого уровня
          </p>
        </div>

        <div className="w-[452px] mt-[229px] flex flex-col px-[43px] py-14 items-center min-h-[532px] bg-white rounded-[15px]">
          <TextField
            className="!h-[50px] !mr-[20.0px] !mt-[81px] !bg-black !w-[298px]"
            variant="standard"
          />
          <TextField
            className="!self-start !mt-[33px] !ml-[37px]"
            variant="standard"
          />
          <div className="w-[50px] min-h-[18px] self-start mt-[33px] ml-[37px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#757576] text-[13px] tracking-[0] leading-[normal]">
            Пароль
          </div>

          <p className="w-[182px] min-h-[13px] self-end mt-[23px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#004f9f] text-xs whitespace-nowrap tracking-[0] leading-[normal]">
            Забыли или не знаете пароль?
          </p>

          <Button variant="primary">Войти</Button>
          <div className="w-[35px] min-h-[13px] mt-[42px] ml-[7.0px] [font-family:'Brutal_Type-Regular',Helvetica] font-normal text-[#4a4a49] text-[13px] text-center whitespace-nowrap tracking-[0] leading-[normal]">
            или
          </div>

          <Button variant="primary">Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  );
};
