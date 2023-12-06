import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { GET_RECORDS } from "./recordList";

const UPDATE_RECORD = gql`
  mutation UpdateRecord(
    $updateRecordId: ID!
    $position: String
    $name: String
    $level: String
  ) {
    updateRecord(
      id: $updateRecordId
      position: $position
      name: $name
      level: $level
    ) {
      name
      position
      level
    }
  }
`;

export default function Edit() {
  const params = useLocation();
  const { id, name, level, position } = params.state.record;
  const [form, setForm] = useState({
    name,
    position,
    level,
  });
  const navigate = useNavigate();
  const [updateRecord] = useMutation(UPDATE_RECORD);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-4">Update Record</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateRecord({
              variables: {
                updateRecordId: id,
                position: form.position,
                name: form.name,
                level: form.level,
              },
              refetchQueries: [GET_RECORDS, "GetRecords"],
            });
            navigate("/", { state: {} });
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
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
              Position:
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
              Level:
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
          <br />

          <div className="mb-4">
            <input
              type="submit"
              value="Update Record"
              className="bg-blue-500 text-white p-2 rounded cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
