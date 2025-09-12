
// // client/src/routes/PrivateRoute.jsx
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // assume you have AuthContext

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;
