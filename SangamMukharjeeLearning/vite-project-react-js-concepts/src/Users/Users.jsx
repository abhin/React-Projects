import { useEffect, useState } from "react";

function Users() {
  const [userList, setUserList] = useState([]);

    // Promise handling function
    function fetchAllUser() {
        fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((res) => {setUserList(res?.users)});
    }

    // Async function
    // async function fetchAllUser() {
    //     const res = await fetch("https://dummyjson.com/users")
    //     const reJson = await res.json();
    //     setUserList(reJson && reJson.users || []);
    // }

    useEffect(() => {
        fetchAllUser();
    }, []);

  return (
    <>
      <div>
        <h1>User List</h1>
        Total Users: {userList.length}
        <ol>
          {userList && userList.length > 0 &&
            userList.map((user) => (
              <li key={user?.id}>
                {user?.firstName} {user?.lastName}
              </li>
            )) || <h2>No Users Found</h2> }
            
        </ol>
      </div>
    </>
  );
}

export default Users;
