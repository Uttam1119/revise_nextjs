"use client";

import { FiTrash } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

type deletButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};

const DeleteButton = ({ action, contact }: deletButtonProps) => {
  const [state, formAction] = useActionState(action, null);
  return (
    <form action={formAction} method="post">
      <input type="hidden" name="id" value={contact?.id} />
      <button
        type="submit"
        className="flex justify-between items-start px-4 py-1 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100 text-red-700 cursor-pointer"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact ?")) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash className="text-red-500 text-lg" /> Delete
      </button>
    </form>
  );
};

export default DeleteButton;
