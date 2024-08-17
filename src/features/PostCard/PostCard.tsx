//import classes from "./PostCard.module.scss";

import {
  Image,
  Text,
  Paper,
  Group,
  Tooltip,
  ActionIcon,
  Stack,
  Button,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { FiDownload, FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

interface PostCardProps {
  title: string;
  media_url: string;
  description: string;
  likes_no: number;
  comments_no: number;
  shares_no: number;
}

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function PostCard({ postId }: { postId: number }) {
  const [data, setData] = useState({});
  const [error, isError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:3000/posts/" + postId);
      const json = await response.json();
      console.log(json);

      setData(json);
      setIsPending(false);
      console.log("set");
    }
    getPosts();
  }, []);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Paper shadow="xl" withBorder w={400} bg={"gray.1"} p={"md"}>
      <Stack>
        <Text>{data.title}</Text>
        <Image mah={450} src={data.media_url}></Image>
        <Group justify="space-evenly">
          <Group>
            <Text>{formatter.format(data.likes_no)}</Text>
            <Tooltip label="Like" withArrow>
              <ActionIcon
                variant="light"
                size={"lg"}
                onClick={async () => {
                  const response = await fetch(
                    "http://localhost:3000/posts/" + postId + "/likes",
                    { method: "POST" }
                  );
                  const json = await response.json();

                  setData({ ...data, likes_no: json.likes_no });
                }}
              >
                <FiHeart size={"60%"}></FiHeart>
              </ActionIcon>
            </Tooltip>
          </Group>

          <Group>
            <Text>{formatter.format(data.comments_no)}</Text>
            <Tooltip label="Comment" withArrow>
              <ActionIcon variant="light" size={"lg"}>
                <FiMessageCircle size={"60%"}></FiMessageCircle>
              </ActionIcon>
            </Tooltip>
          </Group>
          <Group>
            <Text>{formatter.format(data.shares_no)}</Text>
            <Tooltip label="Send" withArrow>
              <ActionIcon variant="light" size={"lg"}>
                <FiSend size={"60%"}></FiSend>
              </ActionIcon>
            </Tooltip>
          </Group>
          {/* <Group>
            <Tooltip label="Download" withArrow>
              <ActionIcon variant="light" size={"lg"}>
                <FiDownload size={"60%"}></FiDownload>
              </ActionIcon>
            </Tooltip>
          </Group> */}
        </Group>
        <Text>{data.description}</Text>
      </Stack>
    </Paper>
  );
}
