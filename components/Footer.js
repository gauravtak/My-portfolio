import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8" style={{ borderTop: '2px solid #059669' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 mb-4 md:mb-0">
            <p>&copy; 2024 Gaurav. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
