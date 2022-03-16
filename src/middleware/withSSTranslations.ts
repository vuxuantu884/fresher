import { merge } from 'lodash';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const defaultNamespaces = ['common', 'course', 'tech'];

export function withTranslations(
    namespaces: string[] = [],
    cb?: GetServerSideProps | GetStaticProps | GetStaticPaths
) {
    return async (context: any) => {
        return merge(cb ? await cb(context) : { props: {} }, {
            props: {
                ...(await serverSideTranslations(context.locale, [
                    ...defaultNamespaces,
                    ...namespaces
                ]))
            }
        });
    };
}
