import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";

const Page = async () => {
  const session = await getServerSession(authConfig as any);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session?.user?.image} alt={'user avatar'}/>}
    </div>
  );
};

export default Page;