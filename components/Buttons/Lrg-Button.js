import Link from "next/link";
const LargeButton = (props) => {
    return(
        <Link href={props.url} >
        <button className="btn">
            {props.title}
        </button>
        </Link>
    )
}

export default LargeButton;