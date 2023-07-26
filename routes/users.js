const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  //res.send(users)//This line is to be replaced with actual return value
  res.send(JSON.stringify({users},null,4));

});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
    const email =req.params.email;
    let filter_user=users.filter((user)=>user.email===email);
  // Copy the code here
  res.send(filter_user)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
    users.push({
        "firstName":req.params.firstName,
        "lastName":req.params.lastName,
        "email":req.params.email,
        "DOB":req.params.DOB
    });
  // Copy the code here
  res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!");//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email =req.params.email;
  let filtered_users=users.filter((user)=>user.email===email);

  if(filtered_users.length>0){
      let filtered_user = filtered_users[0];
      let DOB= req.query.DOB;
      //if the DOB has changed
      if(DOB) {
        filtered_user.DOB = DOB
      }
      /*
        Include code here similar to the one above for other attibutes
        */

       users = users.filter((user) => user.email != email);
       users.push(filtered_user);
       res.send(`User with the email  ${email} updated.`);


  } else{
    res.send("Unable to find user!");
  }
  //This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    const email = req.params.email;

    users = users.filter((user) => user.email != email);

  // Copy the code here
  res.send(`User with the email  ${email} deleted.`);//This line is to be replaced with actual return value
});

module.exports=router;
