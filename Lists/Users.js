import React from 'react'
import UserDerails from './UserDerails';

function Users() {
    //Using names as a arrays
    // let names=['John','Vicky','Cena','Thor','Johnson'];
    // return (
    //   <div>
    //     <h2>list of users</h2> 
    //     {names.map(
    //         (name,index)=><li key={index}>{index}.{name}</li>)}
    //   </div>
    // )


    //using obejct as a list
    // const users=['prasad','venkata','manasa'];
    // const namesList=users.map(
    //     (user,index)=><li key={index}>{index}.{user}</li>)
    
    
    // return(
    //     <div>
    //     <h2>List of users</h2>
    //     {namesList}
    //     </div>
       
    // )

    const persons=[
        {id:1,
        name:'prasad',
        age:25,
        skill:'react'},
        {
            id:2,
            name:'venkat',
            age:26,
            skill:'javareact'},
            {
                id:3,
                name:'prasadvenkat',
                age:27,
                skill:'java'}
    ];
    const personList=persons.map(
        person=><UserDerails key={person.id} person={person}/>)
    return(
   <div>
    <h2>List of persons</h2>
    {personList}
    
    {/* {persons.map(
        (person,index)=><li key={index}>{index}{person}</li>
    )} */}
   </div>
    );


    }
export default Users;