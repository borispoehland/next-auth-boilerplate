import useUser from '../src/hooks/useUser';
import Image from 'next/image';
import { useState } from 'react';
import ProfileItem from '../src/components/auth/profile/ProfileItem';
import Separator from '../src/components/ui-components/Separator';
import Spacer from '../src/components/ui-components/Spacer';
import DeleteAccount from '../src/components/auth/profile/DeleteAccount';
import withUser from '../src/hocs/withUser';
import Heading from '../src/components/ui-components/Heading';

interface IEditField {
  name: string;
  email: string;
}

export type TEditField = keyof IEditField;

const UserProfilePage = (): JSX.Element => {
  const { user } = useUser();

  const editFieldState = useState<TEditField>(null);

  return (
    <>
      <Heading>Your profile</Heading>
      <div
        className={`border rounded flex-col items-center bg-base-100 pb-10 pt-28 px-5 md:px-10 mt-28 w-152 max-w-full relative`}
      >
        <div className={`absolute -top-28 left-1/2 transform -translate-x-1/2`}>
          <div
            className={`relative w-56 h-56 max-w-full rounded-full border overflow-hidden bg-base-50`}
          >
            <Image src={user.image} layout="fill" />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <Spacer />
          <ProfileItem
            editFieldState={editFieldState}
            id="name"
            label="Nickname"
            value={user.name ?? user.email.split('@')[0]}
          />
          <Spacer />
          <ProfileItem
            editFieldState={editFieldState}
            id="email"
            isEditable={false}
            label="Email Address"
            value={user.email}
          />
          <Separator />
          <DeleteAccount />
        </div>
      </div>
    </>
  );
};

export default withUser(UserProfilePage)({
  accessDeniedHeading: 'Profile',
  title: 'Profile',
});
