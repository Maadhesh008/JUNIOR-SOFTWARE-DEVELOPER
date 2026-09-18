import './App.css';
import { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [name, setName] = useState('John Doe');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <main className="app-shell">
      <section className="profile-panel" aria-labelledby="page-title">
        <p className="eyebrow">React mid-module assessment</p>
        <h1 id="page-title">User Profile Management</h1>
        <p className="intro">Update the profile name below and see the preview change instantly.</p>

        <UserProfile name={name} />

        <label className="name-field" htmlFor="name-input">
          <span>Profile name</span>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter a name"
          />
        </label>
      </section>
    </main>
  );
}

export default App;
