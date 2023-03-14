import nc from "next-connect";
import connectDB from "@/Backend/config/dbConnect";
import { newProduct } from "@/Backend/controllers/productControllers";

const handler = nc();

connectDB();

handler.post(newProduct);

export default handler;
