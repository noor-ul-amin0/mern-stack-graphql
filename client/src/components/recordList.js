import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

export const GET_RECORDS = gql`
  query GetRecords {
    records {
      id
      name
      position
      level
    }
  }
`;
const DELETE_RECORD = gql`
  mutation DeleteRecord($id: ID!) {
    deleteRecord(id: $id)
  }
`;

const DeleteRecord = ({ id }) => {
  const [deleteRecord, { loading, error }] = useMutation(DELETE_RECORD, {
    variables: { id },
    refetchQueries: [GET_RECORDS, "GetRecords"],
  });

  if (loading) return "Deleting...";
  if (error) return `Delete error! ${error.message}`;

  return (
    <button
      className="text-rose-600"
      onClick={() => {
        deleteRecord({ variables: { id } });
      }}
    >
      Delete
    </button>
  );
};

export default function RecordList() {
  const { loading, error, data } = useQuery(GET_RECORDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex justify-center">
      {data?.records.length === 0 ? (
        <p className="text-gray-600 text-xl">No records found.</p>
      ) : (
        <div class="overflow-x-auto shadow-md rounded-lg w-1/2">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption class="caption-top font-extrabold text-2xl text-gray-600">
              Record List
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Position
                </th>
                <th scope="col" class="px-6 py-3">
                  Level
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.records.map((record) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {record.name}
                  </th>
                  <td class="px-6 py-4">{record.position}</td>
                  <td class="px-6 py-4">{record.level}</td>
                  <td class="px-6 py-4">
                    <div className="flex">
                      <Link
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                        to={`/edit/${record.id}`}
                        state={{ record }}
                      >
                        Edit
                      </Link>{" "}
                      <DeleteRecord id={record.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
