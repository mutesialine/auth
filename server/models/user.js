const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "please enter the valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
      minLength: [6, " The minimun password length is 6 characters"],
    },
  },
  { timeStamps: true }
);


userSchema.pre("save", async function (next) {
  console.log("user about to be created", this);
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
        return user
    }
    throw Error("incorrect password")
  }
  throw Error(" incorrect email");
};

module.exports = mongoose.model("user", userSchema);
