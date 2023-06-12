import { User } from "@prisma/client";

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
