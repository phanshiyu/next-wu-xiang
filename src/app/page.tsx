import Link from "next/link";
import Logo from "./wu-xiang-logo.jpeg";
import Image from "next/image";

import projectImages from './_generated'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Image src={Logo} alt="Wu Xiang Pte Ltd" />
        <ul>
          <Link href="/project/2022-991-maplewood-condo/1">
            <li className="relative">
              <Image className="filter brightness-75" src={projectImages["2022-991-maplewood-condo"][14]} alt="991-maplewood-condo-sample" width={448} height={336} />
              <span className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-lg font-bold">991 Maplewood Condo</span>
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
