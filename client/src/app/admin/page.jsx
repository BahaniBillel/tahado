import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Dashboard from "../../components/admin/dashboard";
import AddNewGiftForm from "../../components/form/addNewGiftForm";
const Admin = async ({ req }) => {
  const session = await getServerSession(options);
  // Get the user's session.
  const sessionx = await getServerSession(req);

  // Get the pathname from the request object.
  // const pathname = new URL(req.url).pathname;

  // Do something with the pathname.
  console.log("this is the requested page ...............", req);

  console.log(session.user.email);

  if (session?.user) {
    return (
      <div>
        <h1 className="text-2xl">
          {" "}
          Welcome back , your email is {session?.user.email}
        </h1>
        {/* <Dashboard /> */}
        <AddNewGiftForm />
      </div>
    );
  }

  if (!session?.user) {
    return <h1>Please enter your credentials </h1>;
  }
};

export default Admin;
