import Post from "@/components/Post";

export default function Home() {
  const posts = [
  {
    title: "My Post",
    author: "Noah Zeke",
    content: "Noah sucks at everything he makes",
    following: false,
  },
  {
    title: "My Post 2",
    author: "Noah Zeke",
    content: "Noah trying to figure it out",
    following: true,
  },
  {
    title: "My Post 3",
    author: "Noah Zeke",
    content: "this is another attempt",
    following: false,
  },
];
 
  return (
    <div>
      {posts.map((content) => {
        return <Post {...content} key={idx + Math.random()}/>;
      })}
      
    </div>
  );
}
