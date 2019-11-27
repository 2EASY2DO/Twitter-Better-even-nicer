const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://2easy2do:poncepazE12@cluster0-vagvb.mongodb.net/?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});
mongoose.Promise = Promise;

module.exports = mongoose;
