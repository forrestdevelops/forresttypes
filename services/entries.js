import { query } from "lib/db";

const WordCount = async (str) => {
    return str
        .split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

const createEntry = async ({ name, data }) => {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const queryCreate = `INSERT INTO entries (name, data, created, wordcount) VALUES ("${name}", "${data}", "${date}", ${await WordCount(data)});`
    const result = await query({ query: queryCreate });
    return result.insertId;
}

const getEntries = async () => {
    try {
        const querySql =
            "SELECT id, name FROM entries";
        const result = await query({ query: querySql });
        return result;
    } catch (error) {
        return error;
    }
}

const getEntry = async (id) => {
    const queryCreate = `Select id, name, data from entries where id = ${id}; `
    const result = await query({ query: queryCreate });
    return result[0];
}

export { getEntries, getEntry, createEntry }