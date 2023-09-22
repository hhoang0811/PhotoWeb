import { Navigate } from "react-router-dom";

function NotFound() {
    return (
        // <h1 style={{textAlign: 'center', marginTop: 400}}>404 | NOT FOUND</h1>
        <Navigate to="/photos" replace />
    );
}

export default NotFound;