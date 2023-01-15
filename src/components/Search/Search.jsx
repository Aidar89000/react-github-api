import './Search.scss'

const Search = ({text, onKeyPress, onChange, onClick}) =>{

    return(
        <div className="search ">
            <input onKeyPress={onKeyPress} onChange={onChange} type="text" className="search__form-control form-control" placeholder={text} />
            <button onClick={onClick} className="search__btn btn btn-warning" >поиск</button>
        </div>
     )
}
export default Search