export interface TextFieldProps {
  variant: "standard";
  className: any;
}

export const TextField = ({
  variant,
  className,
}: TextFieldProps): JSX.Element => {
  return <div className={`w-[50px] h-[18px] bg-[#757576] ${className}`} />;
};
