import { ReactNode } from "react";
import { Link } from "react-router";

const MiniNavBar = ({ src, icon }: { src: string; icon: ReactNode }) => {
  return (
    <span>
      <Link to={src}>{icon}</Link>
    </span>
  );
};

export default MiniNavBar;
