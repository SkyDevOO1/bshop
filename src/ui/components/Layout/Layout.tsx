import { Footer } from "../Navigation/Footer";
import { Navigation } from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
