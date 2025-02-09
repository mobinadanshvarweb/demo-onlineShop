import { Link } from "react-router";
import { GrFormPrevious } from "react-icons/gr";
const Breadcrumbs = ({
  step1,
  step2,
  name,
}: {
  step1: string;
  step2?: string;
  name: string;
}) => {
  return (
    <div className="w-full flex items-center">
      <Link to={`/${step1}`}>دسته بندی</Link>
      <GrFormPrevious />
      <Link to={`/${step1}/${step2}`}>{step2}</Link>
      {step2 && <GrFormPrevious />}
      <span className="cursor-default">{name}</span>
    </div>
  );
};

export default Breadcrumbs;
