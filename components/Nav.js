import Link from 'next/link';

export default function Nav() {
  const navs1 = [
    {
      id: 1,
      name: 'Dashboard',
      slug: '',
      svgPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
      active: true,
    },
    {
      id: 2,
      name: 'Profile',
      slug: 'profile',
      svgPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
      active: false,
    },
    {
      id: 3,
      name: 'Friends',
      slug: 'friends',
      svgPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      active: false,
    },
    {
      id: 4,
      name: 'Messages',
      slug: 'messages',
      svgPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
      active: false,
    },
  ];

  const navs2 = [
    { id: 1, name: 'Team Members', link: '/' },
    {
      id: 2,
      name: 'Documentation',
      link: 'https://study-space-docs.vercel.app/',
    },
  ];

  return (
    <nav className="flex-1 px-2 space-y-16" aria-label="Sidebar">
      <div className="space-y-1">
        {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
        {navs1.map((navItem) => (
          <Link key={navItem.id} href={`/${navItem.slug}`}>
            <a
              className={`text-gray-100 hover:bg-purple-200 hover:text-purple-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                navItem.active ? 'bg-purple-100 text-purple-800' : ''
              }`}
            >
              <svg
                className={`text-purple-300 group-hover:text-gray-500 mr-3 h-6 w-6 ${
                  navItem.active ? 'text-purple-800' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {navItem.svgPath}
              </svg>
              {navItem.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="space-y-1">
        <h3
          className="px-3 text-xs font-semibold text-white uppercase tracking-wider"
          id="projects-headline"
        >
          About
        </h3>
        <div
          className="space-y-1"
          role="group"
          aria-labelledby="projects-headline"
        >
          {navs2.map((navItem) => (
            <a
              key={navItem.id}
              href={navItem.link}
              className="group flex items-center px-3 py-2 text-sm font-medium text-purple-300 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="truncate">{navItem.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
