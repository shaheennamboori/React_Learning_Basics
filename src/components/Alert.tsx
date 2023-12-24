import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  alertDismiss: () => void;
}
const Alert = ({ children, alertDismiss }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={alertDismiss}
        ></button>
      </div>
    </>
  );
};

export default Alert;
