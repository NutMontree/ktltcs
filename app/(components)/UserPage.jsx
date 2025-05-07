// "use client";

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const UserPage = ({ user }) => {
//   const EDITMODE = user._id === "new" ? false : true;
//   const router = useRouter();
//   const startingUserData = {
//     prefix: "นาย",
//     firstname: "",
//     lastname: "",
//     phone: "",
//     address: "",
//     email: "",
//     studentid: "",
//     department: "แผนกคอมพิวเตอร์",
//   };

//   if (EDITMODE) {
//     startingUserData["prefix"] = user.prefix;
//     startingUserData["firstname"] = user.firstname;
//     startingUserData["lastname"] = user.lastname;
//     startingUserData["phone"] = user.phone;
//     startingUserData["address"] = user.address;
//     startingUserData["email"] = user.email;
//     startingUserData["studentid"] = user.studentid;
//     startingUserData["department"] = user.department;
//   }

//   const [formData, setFormData] = useState(startingUserData);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;

//     setFormData((preState) => ({
//       ...preState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (EDITMODE) {
//       const res = await fetch(`/api/Users/${user._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ formData }),
//       });
//       if (!res.ok) {
//         throw new Error("Failed to updated");
//       }
//     } else {
//       const res = await fetch("/api/Users", {
//         method: "POST",
//         body: JSON.stringify({ formData }),

//         "Content-Type": "application/json",
//       });
//       if (!res.ok) {
//         throw new Error("Failed to created");
//       }
//     }

//     router.refresh();
//     router.push("/");
//   };
//   const departments = [
//     "แผนกคอมพิวเตอร์",
//     "แผนกการโรงแรม",
//     "แผนกบัญชี",
//     "แผนกการตลาด",
//   ];
//   const prefixs = ["นาย", "นาง", "นางสาว"];

//   return (
//     <>
//       <div className="flex justify-center py-8">
//         <div className="flex flex-col gap-4 w-1/2">
//           <h3 className="text-center pt-2 pb-2 text-xl">
//             {EDITMODE ? "อัพเดทรายการ" : "สร้างรายการใหม่"}
//           </h3>

//           <label>คำนำหน้า</label>
//           <select
//             className="border rounded-md px-2 py-1 text-zinc-700"
//             name="prefix"
//             value={formData.prefix}
//             onChange={handleChange}
//           >
//             {prefixs?.map((prefix, _index) => (
//               <option key={_index} value={prefix}>
//                 {prefix}
//               </option>
//             ))}
//           </select>

//           <label>ชื่อจริง</label>
//           <input
//             id="firstname"
//             name="firstname"
//             type="text"
//             onChange={handleChange}
//             required={true}
//             value={formData.firstname}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>นามสกุล</label>
//           <input
//             id="lastname"
//             name="lastname"
//             type="text"
//             onChange={handleChange}
//             required={true}
//             value={formData.lastname}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>เบอร์โทรศัพท์</label>
//           <input
//             id="phone"
//             name="phone"
//             type="number"
//             onChange={handleChange}
//             required={true}
//             value={formData.phone}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>ที่อยู่</label>
//           <textarea
//             id="address"
//             name="address"
//             onChange={handleChange}
//             required={true}
//             value={formData.address}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>อีเมล</label>
//           <input
//             id="email"
//             name="email"
//             type="text"
//             onChange={handleChange}
//             required={true}
//             value={formData.email}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>รหัสนักเรียน</label>
//           <input
//             id="studentid"
//             name="studentid"
//             type="number"
//             onChange={handleChange}
//             required={true}
//             value={formData.studentid}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//           />

//           <label>แผนกวิชา</label>
//           <select
//             name="department"
//             value={formData.department}
//             className="border rounded-md px-2 py-1 text-zinc-700"
//             onChange={handleChange}
//           >
//             {departments?.map((department, _index) => (
//               <option key={_index} value={department}>
//                 {department}
//               </option>
//             ))}
//           </select>

//           <div className="pt-4 flex justify-center">
//             <input
//               type="submit"
//               className="btn max-w-xs bg-sky-500 py-4 rounded-lg px-24"
//               value={EDITMODE ? "Updated" : "Created"}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserPage;
