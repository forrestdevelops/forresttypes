import { getEntry as entry } from "services/entries";

export default async function handler(req, res) {

    // Check Request type
    switch (req.method) {
        case 'GET':
            return getEntry(req, res)
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            return;
    }
}

async function getEntry(req, res) {
    const result = await entry(req.query.entry)
    if (result) {
        return res.status(200).json(result);
    }
    else {
        return res.status(404).send(`Could not find entry - ${req.query.entry}`);
    }
}