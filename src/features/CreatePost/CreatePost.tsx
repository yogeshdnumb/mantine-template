//import classes from "./CreatePost.module.scss";

import { Box, Stack } from "@mantine/core";

export default function CreatePost() {
  return (
    <Stack>
      <Box>
        <label htmlFor="media">
          <input type="file" name="media" id="media" />
        </label>
      </Box>
    </Stack>
  );
}
