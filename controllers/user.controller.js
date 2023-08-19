const user =require ('../models/user.model')


exports.signup=(req,res)=>{

    const data={
        firstname:'chayma',
        lastname:'ben Hammed',
        email:'chaima.benhamed@gmail.com',
        password:'123456789',
        bio:'',
        picture:'',
        birthdate:new Date ()

    }
const_user=new User(data);
-user.save().then(
    (createUser)=>{
        res.status(200).json({message:'user added successfully...'})
    }
).catch(
    (err)=>{
        res.status(400).json({message:'probleme while adding the user...'})
    }
)

}


exports.signup=(req,res)=>{

    const data={
        firstname:'Ahmed',
        lastname:'ben ali',
        email:'ahmed.@gmail.com',
        password:'123456789',
        bio:'',
        picture:'',
        birthdate:new Date ()

    }
const_user=new User(data);
-user.save().then(
    (createUser)=>{
        res.status(200).json({message:'user added successfully...'})
    }
).catch(
    (err)=>{
        res.status(400).json({message:'probleme while adding the user...'})
    }
)

}