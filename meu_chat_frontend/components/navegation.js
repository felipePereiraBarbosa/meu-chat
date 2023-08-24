import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Chat</a>
          </Link>
        </li>
        <li>
          <Link href="/chart">
            <a>Gráfico</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
