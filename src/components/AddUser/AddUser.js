import React from 'react';

const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email}
        console.log(user)

        // fetch post data
        fetch("http://localhost:5001/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        })
        .then(res =>res.json())
        .then(data =>{
            console.log( 'success',data)
            alert('user added success fulley')
            event.target.reset();
        })
    }
    return (
        <div>
        <form onSubmit={handleAddUser}>
            <input type='text' name='name' placeholder='Name' required/>
            <br/>
            <input type='email' name='email' placeholder='Email' required/>
            <br/>
            <input type='submit' value={'AddUser'}/>
        </form>
        </div>
    );
};

export default AddUser;