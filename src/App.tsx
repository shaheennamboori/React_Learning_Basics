import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  let [alertState, setAlertState] = useState(false);

  return (
    <div>
      {alertState && (
        <Alert alertDismiss={() => setAlertState(false)}>Hello World</Alert>
      )}
      <Button
        buttonText="Click me"
        onClick={() => {
          setAlertState(true);
        }}
      />
    </div>
  );
}

export default App;
