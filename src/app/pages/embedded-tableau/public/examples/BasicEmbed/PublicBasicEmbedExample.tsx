import { TableauEmbed } from 'app/components/tableau';

// import { TableauEmbed } from '@stoddabr/react-tableau-embed-live';

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/DataSchoolproject2_0/Superstore';

export const PublicBasicEmbedExample = () => (
  <div className="flex justify-center w-full">
    <TableauEmbed viewUrl={PUBLIC_TABLEAU_URL} debug />
  </div>
);

export default PublicBasicEmbedExample;
