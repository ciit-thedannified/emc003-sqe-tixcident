import {createBrowserRouter} from "react-router-dom";
import AuthlessRoute from "../components/authentication/AuthlessRoute.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import SignUpPage from "../pages/auth/SignUpPage.jsx";
import ClientDashboard from "../pages/client/ClientDashboard.jsx";
import ClientDashboardHomePage from "../pages/client/screens/ClientDashboardHomePage.jsx";
import ClientDashboardTicketsPage from "../pages/client/screens/ClientDashboardTicketsPage.jsx";
import ClientDashboardViewTicketPage from "../pages/client/screens/ClientDashboardViewTicketPage.jsx";
import ClientDashboardFeedbacksPage from "../pages/client/screens/ClientDashboardFeedbacksPage.jsx";
import ClientDashboardViewFeedbackPage from "../pages/client/screens/ClientDashboardViewFeedbackPage.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminDashboardHomePage from "../pages/admin/screens/AdminDashboardHomePage.jsx";
import AdminDashboardViewFeedbackPage from "../pages/admin/screens/AdminDashboardViewFeedbackPage.jsx";
import AdminDashboardFeedbacksPage from "../pages/admin/screens/AdminDashboardFeedbacksPage.jsx";
import AdminDashboardIssuesPage from "../pages/admin/screens/AdminDashboardIssuesPage.jsx";
import AdminDashboardViewIssuePage from "../pages/admin/screens/AdminDashboardViewIssuePage.jsx";
import AdminDashboardUsersPage from "../pages/admin/screens/AdminDashboardUsersPage.jsx";

function FeedbackFormPage() {
    return null;
}

function IssueFormPage() {
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
            {
                path: '/issues/create',
                element: (
                    <IssueFormPage />
                ),
            },
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
            {
                path: 'feedbacks/create',
                element: (
                    <FeedbackFormPage />
                )
            },
        ]
    },
    {
        path: '/a',
        element: (
            <AdminDashboard />
        ),
        children: [
            {
                index: true,
                element: (
                    <AdminDashboardHomePage />
                ),
            },
            {
                path: 'issues',
                element: (
                    <AdminDashboardIssuesPage />
                ),
            },
            {
                path: 'issues/:issue_id',
                element: (
                    <AdminDashboardViewIssuePage />
                ),
            },
            {
                path: 'issues/create',
                element: (
                    <IssueFormPage />
                )
            },
            {
                path: 'feedbacks',
                element: (
                    <AdminDashboardFeedbacksPage />
                ),
            },
            {
                path: 'feedbacks/:feedback_id',
                element: (
                    <AdminDashboardViewFeedbackPage />
                ),
            },
            {
                path: 'users',
                element: (
                    <AdminDashboardUsersPage />
                ),
            },
        ]
    }
]);

export default AppRoutes;