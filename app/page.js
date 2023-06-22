"use client";
import Banner from "@/components/Banner";
import UserInfo from "@/components/UserInfo";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch(
      "https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users"
    )
      .then((response) => response.json())
      .then((data) => {
        if (sortType === "asc") {
          const sorted = data.sort((a, b) => {
            return a.score - b.score;
          });
          setUsers(sorted);
          setFilteredUsers(sorted);
        }
        if (sortType === "des") {
          const sorted = data.sort((a, b) => {
            return b.score - a.score;
          });
          setUsers(sorted);
          setFilteredUsers(sorted);
        }
      });
  }, [sortType]);

  const searchName = (e) => {
    const searchName = e.target.value;
    setSearchItem(searchName);
    console.log(searchName);
    const filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      {users?.length && <Banner users={users} />}
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>
                  <input
                    type="text"
                    placeholder="Search with name..."
                    className="input input-bordered input-primary w-full max-w-xs"
                    onChange={(e) => searchName(e)}
                  />
                </th>
                <th>
                  <details className="dropdown mb-2">
                    <summary className="btn">Filter</summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                      <li>
                        <h5 onClick={() => setSortType("asc")}>Ascending</h5>
                      </li>
                      <li>
                        <h5 onClick={() => setSortType("des")}>Descending</h5>
                      </li>
                    </ul>
                  </details>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name & Country</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length
                ? filteredUsers.map((user) => (
                    <UserInfo user={user} key={user.id} />
                  ))
                : users.map((user) => <UserInfo user={user} key={user.id} />)}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};
export default Home;
