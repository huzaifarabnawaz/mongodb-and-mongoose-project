const moongose = require('mongoose')

const product = moongose.Schema(
    {

        name: {
            type: String,
            required: [true, 'please enter product name']
        },

        price:{
            type:Number,
            required:true,
            default:0
        },

        quantity:{
            type:Number,
            default:0,
            required:true
        }

    }

)