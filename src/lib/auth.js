import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { jwtClient } from "better-auth/client/plugins";
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('petnest');
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: { 
    enabled: true, 
  },
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT, 
            clientSecret: process.env.GOOGLE_SECRET , 
        }, 
    },
    session : {
      cookieCache: {
        enabled:true,
        strategy: "jwt",
        maxAge: 12 * 24 * 60 * 60
      }
    },
    plugins: [
         jwt()
    ]
     
    
});