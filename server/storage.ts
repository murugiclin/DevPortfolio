
import { type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { insertMessage, getAllMessages } from "./db";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class SqliteStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = insertMessage.run({
      name: message.name,
      email: message.email,
      subject: message.subject,
      message: message.message
    });
    
    return {
      id: result.lastInsertRowid as number,
      name: message.name,
      email: message.email,
      subject: message.subject,
      message: message.message,
      createdAt: new Date()
    };
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const messages = getAllMessages.all();
    return messages.map(msg => ({
      ...msg,
      createdAt: new Date(msg.createdAt)
    }));
  }
}

export const storage = new SqliteStorage();
