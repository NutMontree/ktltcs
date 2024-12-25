import DeleteUser from "./DeleteUser";
import Link from "next/link";

const UserCard = ({ user }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(user.createdAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex">
        <div className="ml-auto">
          <DeleteUser id={user._id} />
        </div>
      </div>
      <Link href={`/UserPage/${user._id}`} style={{ display: "contents" }}>
        <div className="flex gap-1 mb-1">
          <p>{user.prefix}</p>
          <div className="flex gap-2">
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
          </div>
        </div>
        <hr className="h-px border-0 bg-page mb-2"></hr>
        <p className="whitespace-pre-wrap py-1">{user.phone}</p>
        <p className="whitespace-pre-wrap py-1">{user.address}</p>
        <p className="whitespace-pre-wrap py-1">{user.email}</p>

        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">วันที่กรอกข้อมูล: {createdDateTime}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
