import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h1>Changeset newer addition</h1>
        <h2>Hello World</h2>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
