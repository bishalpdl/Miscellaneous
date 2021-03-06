const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name:{
        unique:false,
        type: String,
        required: true,
        trim: true
    },

    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Age can't be negative")
            }
        }
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Not an Email')
            }
        }
    },
    password:{
        type: String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Please enter other password')
            }
        }
    },

    tokens:[{
        token:{
            type: String,
            required: true
        }

    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'thisismynewcorse')

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}


// defining findbycredentials
userSchema.statics.findByCredentials = async function(email, password){
    const user = await User.findOne({email})
    if(!user ){ 
        throw new Error('Unable to login!')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}




// hashing plain text password
userSchema.pre('save', async function(next){
    const user = this 
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
}) 



const User = mongoose.model('User',userSchema)


module.exports = User
