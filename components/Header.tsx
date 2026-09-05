import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div id="header-content" className="container mx-auto flex justify-between items-center">Bryton Palmer</div>
            <nav className="flex space-x-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400">About</Link>
                    </li>
                    </ul>
            </nav>
        </header>
    );
}