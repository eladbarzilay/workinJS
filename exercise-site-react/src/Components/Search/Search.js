import "./Search.css";

function Search() {
  return (
    <div className="Search">


      <div className="difficulty">
          
      <select name="difficulty" id="difficulty">
        <option value="easy">קל</option>
        <option value="medium">בינוני</option>
        <option value="hard">קשה</option>
      </select>
      <label>  חיפוש לפי רמת קושי  </label>
      </div>

      <div className="exerType">
         
      <select name="exerType" id="exerType">
        <option value="short">קצר</option>
        <option value="rolling">מתגלגל</option>
        <option value="tutorial">לימודי</option>
      </select>
      <label>  חיפוש לפי סוג תרגיל  </label>
      </div>
      <div className="searchByTopic">
      <input type="text" placeholder="חיפוש לפי נושא" />
      </div>
    </div>
  );
}

export default Search;
