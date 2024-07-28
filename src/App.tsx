import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Router from "@src/Router";
import { theme } from "@src/themes";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
