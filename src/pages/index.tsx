import Landing from '@/components/landing';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Donate Water Surveys"
          description="Review Surveys from Donate water project"
        />
      }
    >
      <Landing />
    </Main>
  );
};

export default Index;
