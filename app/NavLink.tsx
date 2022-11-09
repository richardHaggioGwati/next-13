'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface NavProps {
	children: React.ReactNode;
	href: string;
}

const NavLink: React.FC<NavProps> = ({ children, href }) => {
	
    let segment = useSelectedLayoutSegment();
	/**
	 * ?returns true if the current link is active
	 */
	let active = href === `/${segment}`;

	return <Link href={href}>{children}</Link>;
};

export default NavLink;
