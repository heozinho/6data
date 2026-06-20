import ClientPage from './ClientPage';
export function generateStaticParams() { return [{ id: '1' }]; }
export default function Page({ params }: { params: Promise<{ id: string }> }) { return <ClientPage />; }
