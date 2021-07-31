const express = require('express'); //
    // set of additional functions
    // function (class) () => {
        // does a bunch of stuff, has additional function built in
    // }
    //allows us to create server
        //express + mongoose
        //Node.js => JS run on client side. can't run it on computer
            // node lets us run it on computer or server
const app = express(); 
    //app is now an instance of express class

app.get('/', (req, res) => res.send("This Works")) //takes 2 args
                    //first is string/endpoint
                    //second callback fxn
                        //if it reaches this endpoint/route, cb is executed



// process = {
//     env: {
//         PORT: 8080
//     }
// }
const port = process.env.PORT || 5000; //port is a giant obj
app.listen(port, () => console.log(`Server is up on port ${port}`))
    // app.listen takes 2 args. port & cb

