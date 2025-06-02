
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'messages.db'));

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Create initial admin if none exists
const createInitialAdmin = db.prepare(`
  INSERT OR IGNORE INTO admins (username, password) 
  VALUES ('admin', ?)
`);

// Default password is 'admin123' - make sure to change this
const hashedPassword = bcrypt.hashSync('knoxadmin', 10);
createInitialAdmin.run(hashedPassword);

export const insertMessage = db.prepare(`
  INSERT INTO messages (name, email, subject, message)
  VALUES (@name, @email, @subject, @message)
`);

export const getAllMessages = db.prepare(`
  SELECT * FROM messages ORDER BY created_at DESC
`);

export const verifyAdmin = db.prepare(`
  SELECT * FROM admins WHERE username = ?
`);

export { db };
