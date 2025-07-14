import mongoose from "mongoose";
export const connect = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://oussamamissaouiit:x3PoH6Q5uBdhm8Vf@cluster0.4ycox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected: ${connection.connection.host}`);
}catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
};