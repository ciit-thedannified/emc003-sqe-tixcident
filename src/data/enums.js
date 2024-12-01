const UserTypes = Object.freeze({
    User: {
        label: "User",
        value: "USER"
    },
    Admin: {
        label: "Administrator",
        value: "ADMIN"
    },
});

const PriorityTypes = Object.freeze({
    None: {
        label: "None",
        value: "NONE"
    },
    Low: {
        label: "Low",
        value: "LOW"
    },
    Medium: {
        label: "Medium",
        value: "MEDIUM"
    },
    High: {
        label: "High",
        value: "HIGH"
    },
});

const StatusTypes = Object.freeze({
    Open: {
        label: "Open",
        value: "OPEN"
    },
    Assigned: {
        label: "Assigned",
        value: "ASSIGNED"
    },
    InProgress: {
        label: "In Progress",
        value: "IN_PROGRESS"
    },
    Resolved: {
        label: "Resolved",
        value: "RESOLVED"
    },
    Invalid: {
        label: "Invalid",
        value: "INVALID"
    },
});

const IssueTypes = Object.freeze({
    None: {
        label: "None",
        value: "NONE"
    },
    Bug: {
        label: "Bug",
        value: "BUG"
    },
    FeatureRequest: {
        label: "Feature Request",
        value: "FEATURE_REQUEST"
    },
    Help: {
        label: "Help",
        value: "HELP"
    },
    Incident: {
        label: "Incident",
        value: "INCIDENT"
    },
    ServiceRequest: {
        label: "Service Request",
        value: "SERVICE_REQUEST"
    },
    Support: {
        label: "Support",
        value: "SUPPORT"
    },
});

const FeedbackTypes = Object.freeze({
    CustomerService: {
        label: "Customer Service",
        value: "CUSTOMER_SERVICE"
    },
    ProductReview: {
        label: "Product Review",
        value: "PRODUCT_REVIEW"
    },
    ApplicationReview: {
        label: "Application Review",
        value: "APPLICATION_REVIEW"
    },
    Others: {
        label: "Other Feedback",
        value: "OTHERS"
    },
})

const USER_TYPES = Object.values(UserTypes).flatMap(type => type.value);
const PRIORITY_TYPES = Object.values(PriorityTypes).flatMap(type => type.value);
const STATUS_TYPES = Object.values(StatusTypes).flatMap(type => type.value);
const ISSUE_TYPES = Object.values(IssueTypes).flatMap(type => type.value);
const FEEDBACK_TYPES = Object.values(FeedbackTypes).flatMap(type => type.value);

export {
    UserTypes,
    PriorityTypes,
    StatusTypes,
    IssueTypes,
    FeedbackTypes,
    USER_TYPES,
    PRIORITY_TYPES,
    STATUS_TYPES,
    ISSUE_TYPES,
    FEEDBACK_TYPES,
}
