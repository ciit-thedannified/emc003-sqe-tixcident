import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ErrorBoundarySample from "../pages/errors/ErrorBoundarySample.jsx";
import AuthlessRoute from "../components/authentication/AuthlessRoute.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import SignUpPage from "../pages/auth/SignUpPage.jsx";
import AuthenticatedRoute from "../components/authentication/AuthenticatedRoute.jsx";
import ClientDashboard from "../pages/client/ClientDashboard.jsx";
import ClientDashboardHomePage from "../pages/client/screens/ClientDashboardHomePage.jsx";
import ClientDashboardTicketsPage from "../pages/client/screens/ClientDashboardTicketsPage.jsx";
import ClientDashboardViewTicketPage from "../pages/client/screens/ClientDashboardViewTicketPage.jsx";
import ClientDashboardFeedbacksPage from "../pages/client/screens/ClientDashboardFeedbacksPage.jsx";
import ClientDashboardViewFeedbackPage from "../pages/client/screens/ClientDashboardViewFeedbackPage.jsx";

function FeedbackFormPage() {
    return null;
}

const AppRoutes = createBrowserRouter([
    // ROOT - INITIAL DIRECTORY
    {
        path: '/',
        element: (
            <ClientDashboard />
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
            <ClientDashboard />
        ),
        children: [
            {
                index: true,
                element: (
                    <ClientDashboardHomePage />
                )
            },
            {
                path: 'issues',
                element: (
                    <ClientDashboardTicketsPage />
                )
            },
            {
                path: 'issues/:issue_id',
                element: (
                    <ClientDashboardViewTicketPage />
                )
            },
/*            {
                path: '/issues/create',
                element: (
                    <IssueFormPage />
                ),
            },*/
            {
                path: 'feedbacks',
                element: (
                    <ClientDashboardFeedbacksPage />
                )
            },
            {
                path: 'feedbacks/:feedback_id',
                element: (
                    <ClientDashboardViewFeedbackPage />
                )
            },
            {
                path: 'feedbacks/create',
                element: (
                    <FeedbackFormPage />
                )
            },
        ]
    },
]);

export default AppRoutes;