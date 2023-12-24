const { Provider } = require("react-redux");

export function Providers({ children }) {
    return <provider>
        {children}
    </provider>
}