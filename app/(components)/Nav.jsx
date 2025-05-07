import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            {/* <div icon={faHome} className="icon"> */}
            <div className="icon">Home</div>
          </Link>
          <Link href="/UserPage/new">
            <div className="icon">เพิ่มข้อมูล</div>
          </Link>
        </div>
        <div>
          <p className=" text-default-text">Ktltc Post</p>
        </div>
      </nav>
    </>
  );
};

export default Nav;
