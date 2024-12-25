"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditUserForm = ({ user }) => {
  const EDITMODE = user._id === "new" ? false : true;
  const router = useRouter();
  const startingUserData = {
    prefix: "นาย",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    email: "",
    studentid: "",
    department: "แผนกคอมพิวเตอร์",
  };

  if (EDITMODE) {
    startingUserData["prefix"] = user.prefix;
    startingUserData["firstname"] = user.firstname;
    startingUserData["lastname"] = user.lastname;
    startingUserData["phone"] = user.phone;
    startingUserData["address"] = user.address;
    startingUserData["email"] = user.email;
    startingUserData["studentid"] = user.studentid;
    startingUserData["department"] = user.department;
  }

  const [formData, setFormData] = useState(startingUserData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to updated");
      }
    } else {
      const res = await fetch("/api/Users", {
        method: "POST",
        body: JSON.stringify({ formData }),

        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to created");
      }
    }

    router.refresh();
    router.push("/");
  };
  const departments = [
    "แผนกคอมพิวเตอร์",
    "แผนกการโรงแรม",
    "แผนกบัญชี",
    "แผนกการตลาด",
  ];
  const prefixs = ["นาย", "นาง", "นางสาว"];

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col gap-3 w-1/2"
        >
          <h3>{EDITMODE ? "อัพเดทรายการ" : "สร้างรายการใหม่"}</h3>

          <label>คำนำหน้า</label>
          <select name="prefix" value={formData.prefix} onChange={handleChange}>
            {prefixs?.map((prefix, _index) => (
              <option key={_index} value={prefix}>
                {prefix}
              </option>
            ))}
          </select>

          <label>ชื่อจริง</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.firstname}
          />

          <label>นามสกุล</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.lastname}
          />

          <label>เบอร์โทรศัพท์</label>
          <input
            id="phone"
            name="phone"
            type="number"
            onChange={handleChange}
            required={true}
            value={formData.phone}
          />

          <label>ที่อยู่</label>
          <textarea
            id="address"
            name="address"
            onChange={handleChange}
            required={true}
            value={formData.address}
          />

          <label>อีเมล</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.email}
          />

          <label>รหัสนักเรียน</label>
          <input
            id="studentid"
            name="studentid"
            type="number"
            onChange={handleChange}
            required={true}
            value={formData.studentid}
          />

          <label>แผนกวิชา</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            {departments?.map((department, _index) => (
              <option key={_index} value={department}>
                {department}
              </option>
            ))}
          </select>

          <input
            type="submit"
            className="btn max-w-xs"
            value={EDITMODE ? "Updated" : "Created"}
          />
        </form>
      </div>
    </>
  );
};

export default EditUserForm;
