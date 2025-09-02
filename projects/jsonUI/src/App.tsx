const json = [
  {
    traceId: "1234abcd",
    service: "auth-service",
    operation: "POST /login",
    description: "user logged in",
    duration: 120,
    startTime: "2025-08-12 18:45:00",
    spans: [
      { spanId: "s1", operation: "DB Query", duration: 30 },
      { spanId: "s2", operation: "Auth Check", duration: 50 },
      { spanId: "s3", operation: "Response", duration: 40 },
    ],
  },
  {
    traceId: "5678efgh",
    service: "payment-service",
    operation: "POST /charge",
    description: "user made a post request",
    duration: 95,
    startTime: "2025-08-12 18:50:00",
    spans: [
      { spanId: "s4", operation: "Payment API Call", duration: 40 },
      { spanId: "s5", operation: "DB Update", duration: 30 },
      { spanId: "s6", operation: "Send Receipt", duration: 25 },
    ],
  },
];
function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold pb-2.5">
          OpenTelemetry Trace Viewer
        </h1>

        <div>
          <input
            type="text"
            placeholder="search by traceId or serviceId"
            className=""
          />
          <select>
            <option>all services</option>
          </select>
        </div>

        <div className="bg-blue-400 text-white p-8 rounded-lg">
          <table>
            <thead>
              <tr>
                <th className="px-4 py-4">Trace ID</th>
                <th className="px-4 py-4">Service</th>
                <th className="px-4 py-4">Description</th>
                <th className="px-4 py-4">Duration</th>
                <th className="px-4 py-4">Start time</th>
              </tr>
            </thead>

            <tbody>
              {json.map((json) => (
                <tr key={json.traceId}>
                  <td>{json.traceId}</td>
                  <td>{json.service}</td>
                  <td>{json.description}</td>
                  <td>{json.duration}</td>
                  <td>{json.startTime}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
