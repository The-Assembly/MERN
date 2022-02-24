const router = require("express").Router();
const stripe = require("stripe")("##Stripe secret key goes here");
const {v4:uuidv4} = require("uuid");

router.route('/pay').post((req,res)=>{
    const {token,amount} = req.body;
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token
    }).then(customer=>
        {
            stripe.charges.create({
                amount: amount * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email    
            }, {idempotencyKey})
        })
        .then(result => {
            res.status(200).json(result);
        });
});

module.exports = router;