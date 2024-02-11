import Link from "next/link";
import { navlinks } from "../(info)";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mx-10 h-[10vh]">
      <div className="w-[22%]">
        <div className="block lg:hidden">
          <DensityMediumIcon className="text-[3vw]" />
        </div>
        <ul className="lg:flex hidden justify-between uppercase">
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" text-center">
        <h1 className="lg:text-4xl text-[5vw]">
          <Link href={"/"}>Flawless</Link>
        </h1>
      </div>
      <div className="flex justify-between w-[10%]">
        <Link href={"/profile"}>
          <PersonIcon className="text-[3vw] lg:text-3xl" />
        </Link>
        <Link href={"/cart"}>
          <LocalMallIcon className="text-[3vw] lg:text-3xl" />
        </Link>
      </div>
    </nav>
  );
}
