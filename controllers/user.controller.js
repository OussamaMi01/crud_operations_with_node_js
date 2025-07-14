import User from "../models/user.model.js";
import mongoose from "mongoose";
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while getting users:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

export const createUser = async (req,res)=>{
    const user = req.body;
    
   if(!user.firstName || !user.lastName || !user.age || !user.email || !user.password){
       return res.status(400).json({ sucess: false, message: 'Please provide all fields '});
   }

   const newUser = new User(user);
   try {
   await newUser.save();
   res.status(201).json({ sucess: true, data: newUser }); 
   } catch (error) {
    console.error("Error while creating the user:", error.message); 
    res.status(500).json({ sucess: false, message: "Server Error" });      
}
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ sucess: false, message: "Invalid user id" });
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ sucess: true, data: updatedUser });
    }catch (error) {
       
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;  
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ sucess: false, message: "Invalid user id" });
    }
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ sucess: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
};