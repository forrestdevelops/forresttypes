import { getEntry } from "services/entries"

export default function entry(props) {
    return (
        <div className='entries' key={props.entry_data.entry_id}>
            <h3>{props.entry_data.name}</h3>
            <p>{props.entry_data.data}</p>
        </div>)
}

export async function getServerSideProps(context) {
    return {
        props: {
            entry_data: await getEntry(context.query.entry)
        }
    }
}
