'use client';
import { LoginButton } from './login-button';
import { LogoutButton } from './logout-buton';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const NavBar = () => {
	const { user, error, isLoading } = useUser();
	return (
		<div className="py-4 flex w-full justify-around bg-primary text-foreground">
			<Link href="/">Home</Link>
			<Link href="/profile">Server Protected Profile</Link>
			<Link href="/middleware">Middleware Protected</Link>
			<Link href="/auth-protected">Auth Protected</Link>
			<Link href="/api/data">Protected API</Link>
			<div className="flex gap-4">
				{!user && !isLoading && (
					<>
						<LoginButton />
					</>
				)}
				{user && !isLoading && (
					<>
						<LogoutButton />
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
