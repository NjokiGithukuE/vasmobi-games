import { Button } from "./ui/button";
import { BrowserRouter, useNavigate } from "react-router-dom";

export const Topbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <div className="flex justify-end m-2">
          <div>
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600"
              onClick={handleSignUpClick}
            >
              Sign up
            </Button>
          </div>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
};
