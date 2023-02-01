import { TableauEmbed } from '@stoddabr/react-tableau-embed-live';

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/DataSchoolproject2_0/Superstore';

export const PublicBasicEmbedExample = () => (
  <div className="flex justify-center w-full">
    <TableauEmbed
      sourceUrl={PUBLIC_TABLEAU_URL}
      {...{ 'hide-tabs': true, toolbar: 'hidden' }}
    />
  </div>
);

export default PublicBasicEmbedExample;
