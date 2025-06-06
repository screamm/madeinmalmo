import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Dashboard = () => {
  return (
    <>
      <Header
        title="MADE IN MALMÖ"
        links={[
          { label: "Login", to: "/login" },
          { label: "New Post", to: "/new-post" },
        ]}
      />

      <main>
        
      </main>
      <Footer />
    </>
  );
};
