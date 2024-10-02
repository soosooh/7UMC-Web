// props를 호출했을 때 
const List = (props) => {
    console.log(props)
    const {tech} = props;
    return (
        <li style={{listStyle: 'none'}}>
            {props.tech}
            </li>
    )
}

export default List;