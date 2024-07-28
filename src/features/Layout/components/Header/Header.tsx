//import classes from "./Header.module.scss";

import {
  ActionIcon,
  AppShell,
  Autocomplete,
  Burger,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import { RxSun, RxMoon } from "react-icons/rx";

interface HeaderProps {
  isDesktopNavbarOpened: boolean;
  toggleDesktopNavbar: () => void;
  isMobileNavbarOpened: boolean;
  toggleMobileNavbar: () => void;
}

export default function Header({
  // isDesktopNavbarOpened,
  toggleDesktopNavbar,
  isMobileNavbarOpened,
  toggleMobileNavbar,
}: HeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  return (
    <AppShell.Header>
      <Group px={"sm"} h={"100%"}>
        <Burger
          // opened={isDesktopNavbarOpened}
          onClick={toggleDesktopNavbar}
          visibleFrom="xs"
        />
        <Burger
          opened={isMobileNavbarOpened}
          onClick={toggleMobileNavbar}
          hiddenFrom="xs"
        />
        <Text>Mantine</Text>
        <Group ml={"auto"}>
          <Autocomplete
            visibleFrom="xs"
            leftSection={<FiSearch />}
          ></Autocomplete>
          <ActionIcon
            size={"lg"}
            variant="default"
            onClick={() => {
              setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
            }}
          >
            {computedColorScheme == "dark" ? (
              <RxSun size={"60%"} />
            ) : (
              <RxMoon size={"60%"} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
