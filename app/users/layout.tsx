export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 style={{color:"red"}}>This is User Page</h1>
      {children}
    </>
  );
}
