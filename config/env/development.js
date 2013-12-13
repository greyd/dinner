module.exports = {
	db: "mongodb://localhost/mean-dev",
	app: {
		name : "MEAN - A Modern Stack - Development"
	},
	facebook: {
		clientID: "APP_ID",
		clientSecret: "APP_SECRET",
		callbackURL: "http://localhost:3000/auth/facebook/callback"
	},
	twitter: {
		clientID: "CONSUMER_KEY",
		clientSecret: "CONSUMER_SECRET",
		callbackURL: "http://localhost:3000/auth/twitter/callback"
	},
	github : {
		clientID: "a98cf9e8ce2a4c8d504c",
		clientSecret: "d0392b32d3af531e078b5ee0f22b03581fa36e4c",
		callbackURL: "http://localhost:3000/auth/github/callback"
	},
	google: {
		clientID: "APP_ID",
		clientSecret: "APP_SECRET",
		callbackURL: "http://localhost:3000/auth/google/callback"
	}
}; 