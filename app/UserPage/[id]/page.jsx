import EditUserForm from "@/app/(components)/EditUserForm";

const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateUserData = {};
const UserPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateUserData = await getUserById(params.id);
    updateUserData = updateUserData.foundUser;
  } else {
    updateUserData = {
      _id: "new",
    };
  }

  return <EditUserForm user={updateUserData} />;
};

export default UserPage;
