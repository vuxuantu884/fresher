# Create folder
mkdir "$SOURCEDIR/components"
mkdir "$SOURCEDIR/styles"

# create index file
touch "$SOURCEDIR/index.tsx"
echo "
${COPPYRIGHT}
import MainLayout from 'layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import use${upper_name} from 'handlers/$name/$name.hooks';
import styles from './styles/$name.module.scss';

function ${upper_name}Page() {
  const {} = use${upper_name}();

  return (
    <div className={styles.${upper_name}Container}>
      ${upper_name} Page
    </div>
  )
}

${upper_name}Page.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default ${upper_name}Page;
" >> "$SOURCEDIR/index.tsx"
echo "=============> Created $SOURCEDIR/index.tsx"

# create css file
touch "$SOURCEDIR/styles/$name.module.scss"
echo "
.${upper_name}Container {
  @apply container mx-auto;
}
" >> "$SOURCEDIR/styles/$name.module.scss"
echo "=============> Created $SOURCEDIR/styles/$name.module.scss"
