import React from "react";
import UserCard from "@/app/(components)/UserCard";
// import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getUsers = async () => {
  try {
    const res = await fetch("https://ktltcs.vercel.app/api/Users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const User = async () => {
  const data = await getUsers();

  if (!data?.users) {
    return <p>No users.</p>;
  }

  const users = data.users;

  const uniqueDepartments = [
    ...new Set(users?.map(({ department }) => department)),
  ];

  return (
    <>
      <div className="p-5 flex-grow overflow-y-auto bg-page text-default-text">
        <div>
          {users &&
            uniqueDepartments?.map((uniqueDepartment, departmentIndex) => (
              <div key={departmentIndex} className="mb-4">
                <h2>{uniqueDepartment}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {users
                    .filter((user) => user.department === uniqueDepartment)
                    .map((filteredUser, _index) => (
                      <UserCard id={_index} key={_index} user={filteredUser} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default User;
