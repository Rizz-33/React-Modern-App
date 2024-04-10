import { Props } from "./Button";


export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onclick}>
      {children}
    </button>
  );
};
