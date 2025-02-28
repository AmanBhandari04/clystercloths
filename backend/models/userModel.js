import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    role: {
        type: String,
        enum: ["admin", "user", "moderator"],
        default: 'user'
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
    },
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);
