import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

export const createMessage = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    subject: v.string(),
    message: v.string()
  },
  handler: async (ctx, { name, phone, subject, message }) => {
    await ctx.db.insert('messages', {
      name,
      phone,
      subject,
      message
    });
  }
})