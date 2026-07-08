import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReferAFriendContent from "./ReferAFriendContent";

export const metadata: Metadata = {
  title: "Refer a Friend | Corona Hands-On Therapy",
  description:
    "Know someone dealing with pain from an accident or injury? Refer them to Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function ReferAFriendPage() {
  return (
    <>
      <Header />
      <ReferAFriendContent />
      <Footer />
    </>
  );
}
