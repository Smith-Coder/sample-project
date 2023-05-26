interface Props {
    text: string;
}
export default function Message(props: Props) {
    return (<h1>{props.text}</h1>)
}