
// import React, { useState } from 'react';
// import './App.css';
// import {data} from "./Users";
// function App() {

//   const[users,setUsers]= useState(data)
//   const[sort,setSort] = useState({sort:"id",reversed:false})


//   const sortById=()=>{
//        setSort({sort:"id",reversed:!sort.reversed});
//        const usersCopy =[...users];
//        usersCopy.sort((A,B)=>{///A,B areu used to sort the array comprison
// if(sort.reversed){
//   return A.id-B.id
// }
//         return B.id-A.id
//        })
//        setUsers(usersCopy)
//   }
  

//   const sortedByName=()=>{
//     setSort({sort:"name",reversed:!sort.reversed})
//     const usersCopy =[...users];
//     usersCopy.sort((A,B)=>{
//       const fullnameA =`${A.first_name} ${A.last_name}`;
//       const fullnameB =`${A.first_name} ${A.last_name}`;
//       if(sort.reversed){
//         return fullnameB.localeCompare(fullnameA);
//       }
//         return fullnameA.localeCompare(fullnameB)
                
//     })
// setUsers(usersCopy)
//   };



// const renderUsers=()=>{
//      return users.map((user)=>{
//     return (
//      <tr className='p-5'>
//       <td>{user.id}</td>
//       <td>{user.first_name}</td>
//       <td>{user.last_name}</td>
//       <td>{user.email}</td>
//       <td>{user.gender}</td>
//      </tr>
//     )
//   })
// }

//   return (
//  <>
//  <div className='container'>
// <table class='table table-bordered table-hover ms-5 text-center '>
//     <tr>
//       <th className='p-2  table-bordered' onClick={sortById()}><span>id</span></th>
//       <th  className='p-2 table-bordered'><span>first_name</span></th>
//       <th  className='p-2 table-bordered'><span>last_name</span></th>
//       <th  className='p-2 table-bordered'><span>email</span></th>
//       <th  className='p-2 table-bordered'><span>gender</span></th>
//     </tr>
//     <tbody>{renderUsers()}</tbody>
// </table>
//  </div>
 
//  </>
//   )
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { data } from "./Users";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  const [users, setUsers] = useState(data);
  const [sort, setSort] = useState({ sort: "id", reversed: false });
 const[search,setserach] = useState("")




  const sortById = () => {
    setSort({ sort: "id", reversed: !sort.reversed });
    const usersCopy = [...users];
    usersCopy.sort((A, B) => {
      if (sort.reversed) {
        return A.id - B.id;
      }
      return B.id - A.id;
    });
    setUsers(usersCopy);
  };

  const sortedByName = () => {
    setSort({ sort: "name", reversed: !sort.reversed });
    const usersCopy = [...users];
    usersCopy.sort((A, B) => {
      const fullnameA = `${A.first_name} ${A.last_name}`;
      const fullnameB = `${B.first_name} ${B.last_name}`;
      if (sort.reversed) {
        return fullnameB.localeCompare(fullnameA);
      }
      return fullnameA.localeCompare(fullnameB);
    });
    setUsers(usersCopy);
  };


  const renderUsers = () => {
    return users.map((user, index) => {
      const colorClasses = ['table-primary', 'table-success', 'table-info', 'table-danger'];
      const colorClass = colorClasses[index % colorClasses.length];
      
      return (
        <tr className={colorClass} key={user.id}>
          <td>{user.id}</td>
          <td>{`${user.first_name} ${user.last_name}`}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
        </tr>
      );
    });
  };

const Searchby=(event)=>{
  const matchUser = data.filter((user)=>{
 return   `${user.first_name} ${user.last_name}`
    .toLowerCase()
    .includes(event.target.value.toLowerCase());
  })


  setUsers(matchUser)
  setserach(event.target.value)
}
  const renderArrow=()=>{
    if(sort.reversed){
      return <ArrowUpwardIcon/>
    }
    return <ArrowDownwardIcon/>

  }

  return (
    <>
 <h3 style={{textAlign:"center", marginBottom:"10px"}}>Sorting By Name  and Id Using Recat</h3>
  <div className='form-group w-50 m-auto mb-4'   >
    <input  className='form-control text-center' placeholder='search' value={search}
					onChange={Searchby}/>

  </div>


      <div className='container  '>
        <table className='table table-bordered table-hover ms-5 text-center table-striped '>
          <thead>
            <tr>
              <th className='p-2 fs-3 table-bordered' onClick={sortById}><span>ID</span>
              {sort.sort === "id" ? renderArrow(): null}
              </th>
              <th className='p-2    fs-3 table-bordered' onClick={sortedByName}><span>Full Name</span>
              {sort.sort === "name" ? renderArrow(): null}
              
              </th>
         
              <th className='p-2   fs-3 table-bordered'><span>Email</span></th>
              <th className='p-2   fs-3 table-bordered'><span>Gender</span></th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </>
  );
}

export default App;
