export const ToastNotify = ({ t, message, type }) => {
  return (
    <div className="toast">
      <div className="toast__icon">
        {
          {
            success: <i className="fas fa-check-circle"></i>,
            warning: <i className="fas fa-exclamation-circle"></i>,
            error: <i className="fas fa-times-circle"></i>,
          }[type]
        }
      </div>
      <div className="toast__content">
        <p>{message}</p>
      </div>
    </div>
  );
};
