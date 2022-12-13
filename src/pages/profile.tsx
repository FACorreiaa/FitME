import Link from "next/link";

const Profile = () => {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile Page</h3>

      <Link href={"/"}>Home Page</Link>
    </section>
  );
};

export default Profile;
