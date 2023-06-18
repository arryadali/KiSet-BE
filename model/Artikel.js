import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    cegah: {
      type: {},
      minlength: 50,
      required: true,
    },
    obat: {
      type: {},
      minlength: 50,
      required: true,
    },
    description: {
      type: {},
      minlength: 50,
      required: true,
    },
    foto: String,
    
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
