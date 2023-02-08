import { TableauEmbed } from 'app/components/tableau';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

// const PUBLIC_TABLEAU_URL =
//   'https://public.tableau.com/views/DataSchoolproject2_0/Superstore';

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';

export const PublicBasicEmbedExample = () => (
  <div className="flex flex-col items-center w-full space-y-3">
    <div className="flex justify-center h-[634px] min-w-[800px]">
      <TableauEmbed viewUrl={PUBLIC_TABLEAU_URL} />
    </div>

    <PublicTableauInfoFooter
      tableauUrl={PUBLIC_TABLEAU_URL}
      label="basicEmbeddingWebComponent"
      url="https://tableau.github.io/embedding-api-v3-samples/basicEmbeddingWebComponent.html"
      code="https://github.com/tableau/embedding-api-v3-samples/blob/main/basicEmbeddingWebComponent.html"
    />
  </div>
);

export default PublicBasicEmbedExample;
