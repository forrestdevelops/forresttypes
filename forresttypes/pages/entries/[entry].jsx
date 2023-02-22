export default function entry(props) {
    return (<div className='entries'>{`This is entry ${props.entry_id}`}</div>)
}


export async function getServerSideProps(context) {
    return {
        props: {
            entry_id: context.query.entry
        }
    }
}
