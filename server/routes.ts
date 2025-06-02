import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { authenticateAdmin, login } from "./auth";
import session from 'express-session';

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
  }));

  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    const isValid = await login(username, password);
    
    if (isValid) {
      req.session.isAuthenticated = true;
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  app.post("/api/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });

  app.get("/api/messages", authenticateAdmin, async (req, res) => {
    const messages = await storage.getContactMessages();
    res.json(messages);
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      
      // Here you could add email sending logic using nodemailer
      // For now, we'll just store the message
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon.",
        id: message.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
