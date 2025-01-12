"use server";

import User from "@/lib/models/user.model";
import {connectDB} from "@/lib/db";

export async function creatUser(user: unknown){

    try {
        await connectDB()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
       console.log(error);
        
    }
}