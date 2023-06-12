import { getAllUsers } from "@/app/user/actions";
import { CreateUserForm, UserList } from "@/app/user/ui";

const TestUserPage = async () => {
  const allUsers = await getAllUsers();

  return (
    <div className="space-y-4">
      <h2>Create User:</h2>
      <CreateUserForm allUsers={allUsers} />
      <h2>All Users:</h2>
      <UserList users={allUsers} />
    </div>
  );
};

export default TestUserPage;
