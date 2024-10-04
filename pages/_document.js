// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* Incluir el script de TAOS desde el CDN */}
                <script src="https://unpkg.com/taos@1.0.5/dist/taos.js" async></script>
            </body>
        </Html>
    );
}
