
const TextInput = (props) => {
    return (
        <input type="text"
               placeholder={props.placeholder}
               style={{...style, backgroundColor: props.bgColor}}
        />
    )
}

const style = {
    width: '450rem',
    height: '45rem',
    padding: '10rem',
    border: 'none',
    borderRadius: '50px',
    margin: '0',
    boxSizing: 'border-box',
    //fontSize: '',
    fontFamily: 'sans-serif'
}

export default TextInput