import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initioalProps = await Document.getInitialProps(ctx);
        return { ...initioalProps };
    }
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;