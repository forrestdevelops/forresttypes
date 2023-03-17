import { createEntry, getEntries as entries } from "services/entries";


export default async function handler(req, res) {

    // Check Request type
    switch (req.method) {
        case 'GET':
            return getEntries(res)
        case 'POST':
            return postEntry(req, res)
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            return;
    }
}

async function getEntries(res) {
    return res.status(200).json(await entries());
}

async function postEntry(req, res) {

    await createEntry(req.body).then(entry => {
        return res.status(200).json({ "id": entry });
    })
}