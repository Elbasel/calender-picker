import { getAllUsers } from "@/app/actions";

const TestUserPage = async () => {
  const allUsers = await getAllUsers();

  return (
    <>
      <h2>Users:</h2>
      <ul>
        {allUsers.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TestUserPage;
