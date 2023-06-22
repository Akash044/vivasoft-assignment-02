import React from "react";

const UserInfo = (props) => {
  // console.log(props.user);
  const { id, name, country, score, photo } = props.user;
  return (
    <tr>
      <td>
        <div className="font-bold px-2">{id}</div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{country}</div>
          </div>
        </div>
      </td>

      <td>{score}</td>
    </tr>
  );
};

export default UserInfo;
