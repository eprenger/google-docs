//import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getSession, signOut, useSession } from "next-auth/client";
import Login from "../../components/Login";

export default function Doc() {
  const [session] = useSession();
  const router = useRouter();
  if (!session) return <Login />;
  return (
    <div>
      <header className="flex justify-between items-center p-3">
        <span onClick={() => router.push("/")}>
          <Icon name="description" size="5xl" color="blue" />
        </span>
      </header>
    </div>
  );
}
