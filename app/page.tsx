"use client";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import User from "./components/user/User";
import { Item } from "./interfaces/Item";

export default function HomePage() {
  const [data, setdata] = useState<Item[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const callAPI = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        setdata(
          data.map((user: Item) => {
            return { ...user, follow: false };
          })
        );
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    callAPI();
  }, []);

  const onDeleteUser = (id: number) => {
    const users = data.filter((user) => user.id !== id);
    setdata(users);
  };

  const onFollowUser = (id: number) => {
    const users = data.map((user) =>
      user.id == id ? { ...user, follow: !user.follow } : user
    );
    setdata(users);
  };
  const shimmer = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid p={"lg"}>
      {isLoading && shimmer.map((num) => <Loader key={num} />)}
      {error && <h1>Something went wrong</h1>}
      {data &&
        data.map((item) => (
          <User
            key={item.id}
            onDelete={onDeleteUser}
            onFollow={onFollowUser}
            {...item}
          />
        ))}
    </Grid>
  );
}
