import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { GET_RECORDS } from "./recordList";

const CREATE_RECORD = gql`
  mutation CreateRecord($name: String!, $position: String, $level: String) {
    createRecord(name: $name, position: $position, level: $level) {
      id
    }
  }
`;

export default function Create() {
  const [createRecord] = useMutation(CREATE_RECORD);

  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-4">Create New Record</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createRecord({
              variables: {
                name: form.name,
                position: form.position,
                level: form.level,
              },
              refetchQueries: [GET_RECORDS, "GetRecords"],
            });

            setForm({ name: "", position: "", level: "" });
            navigate("/");
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-600"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              className="mt-1 p-2 border rounded w-full"
              value={form.position}
              onChange={(e) => updateForm({ position: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Level
            </label>
            <div className="flex">
              {["Intern", "Junior", "Senior"].map((level) => (
                <div key={level} className="mr-4">
                  <input
                    type="radio"
                    id={`position${level}`}
                    value={level}
                    checked={form.level === level}
                    onChange={(e) => updateForm({ level: e.target.value })}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`position${level}`}
                    className="text-sm font-medium text-gray-600"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="text-blue-100 bg-blue-500 hover:bg-blue-700 w-full text-center font-bold uppercase text-sm mt-2 py-2 border border-blue-500 hover:border-blue-700 rounded"
            >
              Create Person
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
