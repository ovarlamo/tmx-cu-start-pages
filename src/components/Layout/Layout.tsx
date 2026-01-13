import group from "./group.png";

export const Box = (): JSX.Element => {
  return (
    <div className="flex items-start min-w-[1920px]">
      <img
        className="fixed w-[1920px] h-[1261px] z-[1]"
        alt="Group"
        src={group}
      />
    </div>
  );
};
