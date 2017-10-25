// import npm packages here
var superagent = require('superagent')
var twilio = require('twilio')

// define your functions here:
module.exports = {
	sms: (req, res) => {
		if (req.query.message == null){
			res.json({
				confirmation: 'fail',
				message: 'message parameter required.'
			})
			return
		}

		if (req.query.to == null){
			res.json({
				confirmation: 'fail',
				message: 'to parameter required.'
			})
			return
		}

		var accountSid = '' // Your Account SID from www.twilio.com/console
		var authToken = '' // Your Auth Token from www.twilio.com/console

		var twilio = require('twilio')
		var client = new twilio(accountSid, authToken)

		let payload = null
		client.messages.create({
		    body: req.query.message,
		    to: '+1'+req.query.to,  // Text this number
		    from: '' // From a valid Twilio number
		})
		.then((message) => {
			payload = {
				confirmation: 'success',
				data: message.sid
			}

			res.json(payload)
			return
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
	}
}