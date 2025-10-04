import { getContacts } from "../api/contacts";
import { getSession } from "../lib/session";

const showAllContacts = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div>
        PLease{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>{" "}
        to view contacts
      </div>
    );
  }
  console.log("userId:", user?.id);
  const contacts = await getContacts(user?.id);
  console.log("Contacts list:", contacts);
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a contact
        </a>{" "}
        to your contact list
      </div>
    );
  }
  return <div>ContactPage</div>;
};

export default showAllContacts;
