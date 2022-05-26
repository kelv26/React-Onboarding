import { MongoClient} from 'mongodb';

const url = "mongodb+srv://kelv26:kelv26@nodecluster.ykne9ad.mongodb.net/React-Onboarding?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "React-Onboarding";

async function run() {
    try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);

            // Use the collection "people"
            const col = db.collection("Posts");

            // Find one document
            const myDoc = await col.findOne();

            // Print to the console
            console.log(myDoc);

        } catch (err) {
            console.log(err.stack);
        }
    
        finally {
        await client.close();
    }
}

const Connection = () => {
    run().catch(console.dir);
}

export default Connection