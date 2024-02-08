import { useState, useEffect } from "react";
import FolderList from "./FolderList";
import { getFolders, getUser } from "../api";
import Header from "./Header";

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const { folder } = await getFolders();
    const user = await getUser();
    setItems(folder.links);
    setUser(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <FolderList items={items} />
    </div>
  );
}

export default App;
