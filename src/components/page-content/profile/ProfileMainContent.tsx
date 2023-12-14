import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";
import ProfileSection from "./sections/ProfileSection";

const ProfileMainContent = () => {
  return (
    <Container>
      <PageHeader header="My Profile" />
      <ProfileSection />
    </Container>
  );
};

export default ProfileMainContent;
