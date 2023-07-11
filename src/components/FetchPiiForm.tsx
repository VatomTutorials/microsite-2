import { useState } from "react"


export function FetchPiiForm({ onSubmit }) {
  const [piiKey, setPiiKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (piiKey === "") return;

    onSubmit(piiKey);

    setPiiKey("");
  };


  return (
    <form onSubmit={handleSubmit} className="fetch-pii-form">
      <div className="form-row">
        <label htmlFor="piiKey">Pii Key: </label>
        <input
        	value={piiKey}
          onChange={e => setPiiKey(e.target.value)}
          type="text"
          id="piiKey"
        />
      </div>
      <button className="btn">Fetch</button>
    </form>
  )
}
