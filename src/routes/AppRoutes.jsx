import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ErrorBoundarySample from "../pages/errors/ErrorBoundarySample.jsx";
import AuthlessRoute from "../components/authentication/AuthlessRoute.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import SignUpPage from "../pages/auth/SignUpPage.jsx";

const AppRoutes = createBrowserRouter([
    // CATCH-ALL, ERROR CATCHING PAGE
    {
        path: '*',
        errorElement: <ErrorBoundarySample />
    },
    // ROOT - INITIAL DIRECTORY
    {
        path: '/',
        element: (
            <App />
        )
    },
    // ROOT - LOGIN PAGE
    {
        path: '/login',
        element: (
            <AuthlessRoute>
                <LoginPage />
            </AuthlessRoute>
        )
    },
    // ROOT - SIGNUP PAGE
    {
        path: '/signup',
        element: (
            <AuthlessRoute>
                <SignUpPage />
            </AuthlessRoute>
        )
    },
    // ROOT - (USER) CLIENT DASHBOARD
    {
        path: '/u',
        element: (
            <AuthenticatedRoute>
                <UserDashboard />
            </AuthenticatedRoute>
        ),
        children: [
            {
                path: '/',
                element: (
                    <UserDashboardHomePage />
                )
            },
            {
                path: '/issues',
                element: (
                    <UserDashboardTicketsPage />
                )
            },
            {
                path: '/issues/:issue_id',
                element: (
                    <UserDashboardViewTicketPage />
                )
            },
            {
                path: '/issues/create',
                element: (
                    <IssueFormPage />
                ),
            },
            {
                path: '/feedbacks',
                element: (
                    <UserDashboardFeedbacksPage />
                )
            },
            {
                path: '/feedbacks/:feedback_id',
                element: (
                    <UserDashboardViewFeedbackPage />
                )
            },
            {
                path: '/feedbacks/create',
                element: (
                    <FeedbackFormPage />
                )
            },
        ]
    },
]);

export default AppRoutes;