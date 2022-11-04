import { useEffect, useState } from "react";
import Image from "next/image";

export function Notepad() {
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetch("https://api.github.com/gists/9e97295fe27be76014a705d86705d10f")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setText(data.files["erenk_dev_notepad"].content);
        setLoading(false);
      });
  }, []);

  return (
    <div className="notepad-container">
      <div className="notepad-header">
        <button>File</button>
        <button>Edit</button>
        <button>Search</button>
        <button>Help</button>
      </div>
      {!loading && <pre dangerouslySetInnerHTML={{ __html: text }}></pre>}
      {loading && (
        <pre className="loading">
          <Image
            src="/icons/loading.gif"
            alt="Loading..."
            width={64}
            height={64}
          />
        </pre>
      )}
    </div>
  );
}
