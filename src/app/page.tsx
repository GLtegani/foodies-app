import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>

      <nav>
        <ul>
          <li>
            <Link href='/meals'>Meals</Link>
          </li>
          <li>
            <Link href='/meals/share'>Meals Share</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
          <li>
            <Link href='/meals/slug'>Meals slug</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
