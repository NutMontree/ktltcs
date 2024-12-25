"use client";

// import { faX } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";

const DeleteUser = ({ id }) => {
  const router = useRouter();

  const deletUser = async () => {
    const res = await fetch(`https://ktltcs.vercel.app/api/Users/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div
      // icon={faX}
      className="text-red-500 hover:cursor-pointer hover:text-red-600"
      onClick={deletUser}
    >
      ❌ 
    </div>
  );
};

export default DeleteUser;
