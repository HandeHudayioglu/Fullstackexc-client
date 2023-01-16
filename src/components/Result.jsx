import "./Results.css";
export default function Result({ results }) {
  console.log(results);
  if (typeof results === "number") {
    return (
      <div className="Results">
        <div className="Results__name" key={results.id}>
          {results}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Results">
        <table className="Results__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Citizenship</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody className="Results__name" key={results?.id}>
            <tr>
              <td>{results?.name}</td>
              <td>{results?.id}</td>
              <td>{results?.isCitizen?.toString()}</td>
              <td>{results?.hasDrivingLicense?.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
