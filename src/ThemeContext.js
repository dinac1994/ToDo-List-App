import React from 'react'

export const ThemeContext = React.createContext()
export const UpdateThemeContext = React.createContext()

export function ThemeProvider( { children } ) {
    const [darkTheme, setDarkTheme] = React.useState(false)

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <UpdateThemeContext.Provider value={setDarkTheme}>
                    {children}
                </UpdateThemeContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}