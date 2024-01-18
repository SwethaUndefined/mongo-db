// module.exports = (mongoose) => {
//   const user = mongoose.model(
//     "user",
//     new mongoose.schema({
//       email: {
//         type: String,
//         required: true,
//         unique: true,
//       },
//       password: {
//         type: String,
//         required: true,
//       },
//       firstName: {
//         type: String,
//         required: true,
//       },
//       lastName: String,
//       role: {
//         type: String,
//         // default: user
//       },
//       isLoggedIn: Boolean,
//       token: String,
//     })
//   );

//   return user;
// }
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isLoggedIn: Boolean,
  token: String,
  role: {
    type: String,
    default: "user"
  }
  
});

module.exports = mongoose.model("user",userSchema);
