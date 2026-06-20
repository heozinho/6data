import ClientPage from './ClientPage';
export function generateStaticParams() { return [{ slug: '1' }]; }
export default function Page({ params }: { params: Promise<{ slug: string }> }) { return <ClientPage />; }
