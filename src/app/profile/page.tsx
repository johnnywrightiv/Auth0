import { getSession } from '@auth0/nextjs-auth0';
import ProfileClient from '@/app/profile/components/user-client';
import ProfileServer from '@/app/profile/components/user-server';
import { redirect } from 'next/navigation';

const Profile = async () => {
	const session = await getSession();
	const user = session?.user;
	if (!user) {
		redirect('/');
	}
	return (
		<div className="flex items-center justify-center w-full mt-10 px-4">
			<div className="items-center w-full justify-between">
				<h1 className="text-2xl mb-4">Client Component</h1>
				<ProfileClient />
			</div>
			<div className="items-center w-full justify-between">
				<h1 className="text-2xl mb-4">Server Component</h1>
				<ProfileServer />
			</div>
		</div>
	);
};

export default Profile;
