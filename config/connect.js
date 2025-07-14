import mongoose from "mongoose";
export const connect = async () => {
    try {
        const connection = await mongoose.connect("");
        console.log(`MongoDB connected: ${connection.connection.host}`);
}catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
};
