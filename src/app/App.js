// Import necessary modules
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

// Define the handler function for the API route
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Construct the file path to your CSV file
      const filePath = path.join(process.cwd(), 'C:\Users\hungr\jobdetailsapp\src\app\data\jobs.csv');
      console.log("CSV file found.");
      
      // Read the CSV file
      const file = fs.readFileSync(filePath, 'utf8');
      
      // Parse the CSV file
      const parsed = Papa.parse(file, { header: true });
      
      // Return parsed data as JSON
      res.status(200).json(parsed.data);
    } catch (err) {
      // Handle errors
      res.status(500).json({ message: 'Failed to parse CSV file' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}