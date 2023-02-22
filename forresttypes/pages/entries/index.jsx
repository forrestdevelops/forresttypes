import { getEntries } from "services/entries"

export default function entries(props) {
    return (
        <div className='entries'>
            <h2>Entries</h2>
            {props.entries_data.map((entry) => {
                return (<div key={entry.entry_id}>{entry.name}</div>)
            })}
        </div>)
}

export async function getServerSideProps(context) {
    return {
        props: {
            entries_data: await getEntries()
        }
    }
}