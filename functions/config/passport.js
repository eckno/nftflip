const LocalStrategy = require("passport-local").Strategy;
const {empty, filter_var, isString} = require("../lib/utils/utils");

module.exports = async (passport, auth, db) => {
    passport.use(
        new LocalStrategy({usernameField: 'email', passwordField: "password"}, async (email, password, done) => {

            const user  = await auth.getUserByEmail(email).then((user) => {
                if(user){
                    return user;
                }
                else{
                    //return res.status(201).send({ success: false, data: "There is no user record corresponding to the provided identifier." });
                    return done(null, false, {message: "There is no user record corresponding to the provided identifier."});
                }
            }).catch(() => {
                return done(null, false, {message: "There is no user record corresponding to the provided identifier."});
            });
            //
            if(!empty(user) && !empty(user.email)){
                //
                const userData = await db.collection("members").doc(user.uid).get();
                //
                if(!userData.exists){
                    return done(null, false, {message: "Error: User data not found, please contact support"});
                }
                //
                if(userData.data().auth != password){
                    return done(null, false, {message: "Incorrect email address or password!!"});
                }else
                if(userData.data().emailValidated === false){
                    return done(null, false, {message: "Please check for the verification email sent to you to verify and setup your account."});
                }
                else{
                    return done(null, userData.data().uid);
                }
                //console.log(userData.data().auth );
            }
        })
    );
    console.log("USER 1");
    passport.serializeUser(function(user, done){
        console.log("USER ", user);
        done(null, user);
    });
    //console.log("USER two", user);
    passport.deserializeUser(async (id, done) => {
        console.log("USER 2", id);
        const user = await db.collection("members").doc(id).get();
        if (!user) {
          done(error, false);
        }
        done(null, user);
      });
}