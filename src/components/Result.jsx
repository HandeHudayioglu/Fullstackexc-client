import './Results.css';
export default function Result({ results }) {
    if(typeof results==="number") {
        return (
            <div className="Results">
            <div className="Results__name" key={results.id}>
            {results}
          </div>
      </div>
        )
    } else {
    return (
      <div className="Results">
        <div className="Results__name">
            {results.name}
          </div>
          <div className="Results__name">
            {results.isCitizen}
          </div>
      </div>
    );
        }
    }