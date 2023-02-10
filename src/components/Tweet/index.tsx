interface TweetProps {
  user: string;
  children: any;
}

export function Tweet({ user, children }: TweetProps) {
  return (
    <>
      <h1>{user}</h1>
      <p>{children}</p>
    </>
  );
}
