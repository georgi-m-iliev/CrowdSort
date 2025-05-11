import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle/>
            <Button>
                Button
            </Button>
        </ThemeProvider>
    )
}
