import Link from "next/link";

export default function BreadCrumb(props) {
    return (
        <div className="breadcrumb">
            <Link href={`/entries`}>Entries</Link> &gt;  {props.name}
        </div>
    )

}