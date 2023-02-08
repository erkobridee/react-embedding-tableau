import { TableauEmbed } from 'app/components/tableau';

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/DataSchoolproject2_0/Superstore';

export const PublicBasicEmbedExample = () => (
  <div className="flex justify-center w-full">
    <TableauEmbed viewUrl={PUBLIC_TABLEAU_URL} />
  </div>
);

export default PublicBasicEmbedExample;
