module.exports = {
    ensureAuthenticated: async (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }else{
            //
            req.flash('error_msg', 'Please login to access your secure space');
            res.redirect('/login');
        }

        console.log(req.isAuthenticated());
    }
}