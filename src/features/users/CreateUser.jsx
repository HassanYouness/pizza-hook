import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function CreateUser() {
  const usernamee = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return null;
    console.log(username);
    dispatch(updateName(username));
    navigate("./menu");
  }
  function handleCuntinuo() {
    navigate("./menu");
  }
  if (usernamee)
    return (
      <Button onClick={handleCuntinuo} type="base">
        {`Hey ${usernamee}, continue ordering `}
      </Button>
    );

  return (
    <form onSubmit={handleSubmit} className="gap">
      <p className="mb-4 text-sm text-stone-100 md:text-base">
        Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-7"
      />

      {username !== "" && (
        <div>
          <Button type="base">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
