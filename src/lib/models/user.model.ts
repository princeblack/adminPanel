import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    id: { type: String, required: true },
    clerkId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String},
    phone: { type: Number},
    picture: [{ type: String }], // URLs des images
    role: { type: String, enum: ["admin", "customer"], default: "admin" },
    isVerified: { type: Boolean, default: false }, // Confirmation par e-mail
    lastActiveAt: { type: Date, default: Date.now }, // Dernière activité
    isOnline: { type: Boolean, default: false }, // Statut en ligne
    address: [
      {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
      },
    ],
    preferences: {
      categories: [String], // Ex. ['electronics', 'fashion']
      recentlyViewed: [
        { type: Schema.Types.ObjectId, ref: "Product" }, // Produits récemment consultés
      ],
      purchaseHistory: [
        { type: Schema.Types.ObjectId, ref: "Product" }, // Produits achetés
      ],
    },
    createdAt: { type: Date, default: Date.now },
  });

  const User = models.User || model("User", UserSchema);

  export default User;