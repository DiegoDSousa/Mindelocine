const PerfilPage=()=>{
    const logOf=()=>{
        localStorage.clear()
    }
    return(
        <div>
            <p><a href="/" onClick={logOf}>log off</a></p>
        </div>

    )
}
export default PerfilPage