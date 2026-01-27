import './ThemeToggle.css'


function ThemeToggle({ themeToggle }) {

    return (
        <button onClick={themeToggle}>
            Theme Toggle
        </button>
    )
}

export default ThemeToggle