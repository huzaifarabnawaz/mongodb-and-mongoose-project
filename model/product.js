const moongose = require('mongoose')

const productSchema = moongose.Schema(
    {

        name: {
            type: String,
            required: [true, 'please enter product name']
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        Image: {
            type: String,
            require: true
        }

    },

    {
        timestamps: true,
        versionKey: false
    }

);

const product=moongose.model('product',productSchema)


module.exports=product