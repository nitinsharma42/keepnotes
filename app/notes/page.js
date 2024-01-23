"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useState } from "react";

export default function CreateNotes() {
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNoteSave = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        body: JSON.stringify({ ...notes }),
      });
      const response = await res.json();
      if (response.message) {

      }
    } catch (ex) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center p-5 flex-col">
      <div className="p-5 flex gap-[2vw] w-full flex-col items-start">
        <label htmlFor="title" className="text-xl text-[#4361EE]">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="rounded-md px-1 py-1 w-full"
          onChange={(e) =>
            setNotes((notes) => ({
              ...notes,
              title: e.target.value,
            }))
          }
        />
      </div>
      <div className="p-5 flex gap-[2vw] flex-col w-full items-start">
        <label htmlFor="Description" className="text-xl text-[#4361EE]">
          Description
        </label>
        <textarea
          name="Description"
          className="rounded-md px-1 py-1 w-full h-[200px]"
          onChange={(e) =>
            setNotes((notes) => ({
              ...notes,
              description: e.target.value,
            }))
          }
        />
      </div>
      <PrimaryButton
        type="button"
        handleClick={handleNoteSave}
        bgColor="#4361EE"
        text={loading? "Saving..." : "Save Note"}
        disabled={loading}
      />
    </section>
  );
}
