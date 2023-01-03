import dynamic from "next/dynamic";
import Link from "next/link";

const Tour = dynamic(() => import("../components/tour"), { ssr: false });
console.log(Tour);
export default function IndexPage() {
  return (
    <div className="hero-welcome">
      <Tour />
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
