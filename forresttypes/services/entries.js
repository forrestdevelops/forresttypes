import { dataEntries } from "data/rawData"

const getEntries = async () => {
    return dataEntries
}

const getEntry = async (entry_id) => {
    return dataEntries.find(entry => entry.entry_id == entry_id)
}

export { getEntries, getEntry }