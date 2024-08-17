//import classes from "./Home.module.scss";
import { Stack } from "@mantine/core";
import PostCard from "@src/features/PostCard/PostCard";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const { data, isPending, error } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     return fetch("http://localhost:3000/posts").then((res) => {
  //       return res.json();
  //     });
  //   },
  // });

  return (
    <Stack align="center" gap={"lg"}>
      {[21, 22, 23, 24, 25].map((postId: number) => {
        return <PostCard key={postId} postId={postId}></PostCard>;
      })}
    </Stack>
  );
}
