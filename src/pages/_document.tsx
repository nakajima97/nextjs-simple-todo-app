import {
	DocumentHeadTags,
	type DocumentHeadTagsProps,
	documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';
import {
	type DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

export default function Document(props: DocumentHeadTagsProps) {
	return (
		<Html lang="en">
			<Head>
				<DocumentHeadTags {...props} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (ctx: DocumentContext) => {
	const finalProps = await documentGetInitialProps(ctx);
	return finalProps;
};
