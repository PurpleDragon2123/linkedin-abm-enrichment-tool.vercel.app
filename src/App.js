import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [minFollowers, setMinFollowers] = useState(0);
  const [minEmployees, setMinEmployees] = useState(0);
  const [loading, setLoading] = useState(false);
  const [results] = useState([
    {
      name: "Lidl US",
      url: "https://www.linkedin.com/company/lidl-us/",
      followers: 52000,
      employeesBand: "5,001–10,000",
      employeesValue: 5000,
      region: "United States",
      verified: true,
    },
    {
      name: "Lidl Portugal",
      url: "https://www.linkedin.com/company/lidl-portugal/",
      followers: 333000,
      employeesBand: "10,001+",
      employeesValue: 10001,
      region: "Portugal",
      verified: true,
    },
    {
      name: "Lidl GB",
      url: "https://www.linkedin.com/company/lidl-gb/",
      followers: 252000,
      employeesBand: "10,001+",
      employeesValue: 10001,
      region: "United Kingdom",
      verified: true,
    },
    {
      name: "Lidl France",
      url: "https://www.linkedin.com/company/lidl-france/",
      followers: 204000,
      employeesBand: "10,001+",
      employeesValue: 10001,
      region: "France",
      verified: false,
    },
  ]);

  const filteredResults = results.filter(
    (r) => r.followers >= minFollowers && r.employeesValue >= minEmployees
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>LinkedIn Company Enrichment</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>Company Name</label>
        <input
          style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
          placeholder="e.g. Lidl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>Minimum Followers</label>
        <input
          type="number"
          style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
          placeholder="e.g. 5000"
          value={minFollowers}
          onChange={(e) => setMinFollowers(Number(e.target.value))}
        />
        <label>Minimum Employees</label>
        <input
          type="number"
          style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
          placeholder="e.g. 10000"
          value={minEmployees}
          onChange={(e) => setMinEmployees(Number(e.target.value))}
        />
      </div>

      <table width="100%" border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>LinkedIn URL</th>
            <th>Followers</th>
            <th>Employees</th>
            <th>Region</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((r, idx) => (
            <tr key={idx}>
              <td>{r.name}</td>
              <td><a href={r.url} target="_blank" rel="noopener noreferrer">{r.url}</a></td>
              <td>{r.followers.toLocaleString()}</td>
              <td>{r.employeesBand} employees</td>
              <td>{r.region}</td>
              <td>{r.verified ? "✔️" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;