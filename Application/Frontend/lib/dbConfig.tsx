const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
let uri = process.env.MONGODB_URI;

if (!username || !password || !uri) {
  console.error(
    "MongoDB connection information is missing in environment variables",
  );
  process.exit(1);
}

const constructedUri = uri
  .replace("<username>", encodeURIComponent(username))
  .replace("<password>", encodeURIComponent(password));

export const getMongoDbUri = () => constructedUri;
